import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]  // 👈 sin providers aquí
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;
  imagenPreview: string | null = null;
  clienteGuardado: any = null;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  async ngOnInit() {
    await this.storageService.init();
    const cliente = await this.storageService.get('cliente');
    if (cliente) {
      this.clienteGuardado = cliente;
      this.profileForm.patchValue(cliente);
      this.imagenPreview = cliente.foto || null;
    }
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.imagenPreview = image.dataUrl || null;
  }

  async seleccionarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    this.imagenPreview = image.dataUrl || null;
  }

  async guardarProfile() {
    if (this.profileForm.valid) {
      this.clienteGuardado = {
        ...this.profileForm.value,
        foto: this.imagenPreview
      };
      await this.storageService.set('cliente', this.clienteGuardado);
      alert('Perfil guardado correctamente!');
    }
  }

}
