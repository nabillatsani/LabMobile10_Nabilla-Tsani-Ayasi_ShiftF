<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Profile</ion-title>
          <ion-button slot="end" fill="clear" @click="logout" style="--color: gray;">
            <ion-icon slot="end" :icon="exit"></ion-icon>
            <ion-label>Logout</ion-label>
          </ion-button>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <!-- Avatar -->
        <div id="avatar-container">
          <ion-avatar>
            <img alt="Avatar" :src="userPhoto" @error="handleImageError" />
          </ion-avatar>
        </div>
  
        <!-- Data Profile -->
        <ion-list>
          <ion-item>
            <ion-input label="Nama" :value="user?.displayName" :readonly="true"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Email" :value="user?.email" :readonly="true"></ion-input>
          </ion-item>
        </ion-list>
  
        <!-- Tabs Menu -->
        <TabsMenu />
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonLabel, IonIcon, IonButton, IonAvatar } from '@ionic/vue';
  import { exit } from 'ionicons/icons';
  import { computed, ref, onMounted } from 'vue';
  import TabsMenu from '@/components/TabsMenu.vue';
  import { useAuthStore } from '@/stores/auth';
  
  const authStore = useAuthStore();
  const user = computed(() => authStore.user);
  
  const logout = () => {
    authStore.logout();
  };
  
  // Path lokal ke file foto
  const userPhoto = ref<string>('');
  
  function loadLocalPhoto() {
    // Jika Anda menyimpan gambar di folder public, cukup gunakan jalur relatif
    userPhoto.value = '/images/profile.jpg'; // Contoh path gambar lokal
  }
  
  function handleImageError() {
    userPhoto.value = 'https://ionicframework.com/docs/img/demos/avatar.svg'; // Fallback
  }
  
  // Panggil fungsi untuk memuat foto saat halaman di-mount
  onMounted(() => {
    loadLocalPhoto();
  });
  </script>
  
  <style scoped>
  #avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  
  ion-avatar {
    width: 100px;
    height: 100px;
    border: 2px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
  }
  
  ion-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }
  </style>
  