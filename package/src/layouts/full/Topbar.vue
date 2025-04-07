<script setup lang="ts">
import {
    BriefcaseIcon,
    ChevronDownIcon,
    DeviceLaptopIcon,
    GiftIcon,
    LifebuoyIcon,
    ShoppingCartIcon,
    WindowMaximizeIcon
} from 'vue-tabler-icons';

const items = [
    { text: 'Support', icon: LifebuoyIcon, url: 'https://support.wrappixel.com/' },
    { text: 'Templates', icon: GiftIcon, url: 'https://www.wrappixel.com/' },
    { text: 'Hire Us', icon: BriefcaseIcon, url: 'https://www.wrappixel.com/hire-us/' }
];

const preview_link = [
    {
        title: 'Bootstrap Preview',
        url: 'https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#demos'
    },
    {
        title: 'Angular Preview',
        url: 'https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#demos'
    },
    {
        title: 'Vuejs Preview',
        url: 'https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#demos'
    },
    {
        title: 'Reactjs Preview',
        url: 'https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos'
    },
    {
        title: 'Next Preview',
        url: 'https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#demos'
    },
    {
        title: 'Nuxtjs Preview',
        url: 'https://www.wrappixel.com/templates/materialm-vuetify-nuxt-js-admin-template/?ref=376#demos'
    },
   
];

const buy_link = [
    {
        title: 'Buy Bootstrap Version',
        url: 'https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#package-card'
    },
    {
        title: 'Buy Angular Version',
        url: 'https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#package-card'
    },
    {
        title: 'Buy Vuejs Version',
        url: 'https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#package-card'
    },

    {
        title: 'Buy Reactjs Version',
        url: 'https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#package-card'
    },
    {
        title: 'Buy Nextjs Version',
        url: 'https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#package-card'
    },
    {
        title: 'Buy Nuxtjs Preview',
        url: 'https://www.wrappixel.com/templates/materialm-vuetify-nuxt-js-admin-template/?ref=376#package-card'
    },
   
];
</script>
<template>
    <div class="feature-topbar w-full pa-4 bg-textPrimary w-100">
        <div class="d-flex flex-lg-row flex-column gap-3 justify-space-between align-center">
            <div class="d-flex align-center ga-10">
                <a href="https://www.wrappixel.com/" target="_blank"> <img src="@/assets/images/logos/logo-wrappixel.svg" /></a>
                <div class="d-lg-flex d-none items-center ga-3 topbar-links">
                    <v-btn
                        v-for="(item, index) in items"
                        :key="index"
                        class="d-flex items-center"
                        variant="text"
                        :href="item.url"
                        target="_blank"
                    >
                        <component :is="item.icon" size="20" />
                        <span class="ps-1">{{ item.text }}</span>
                    </v-btn>
                </div>
            </div>
            <div class="d-flex flex-md-row flex-column align-center ga-4">
                <h5 class="text-h5">Check MaterialM Premium Version</h5>
                <div class="d-flex ga-md-4 ga-2">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn variant="outlined" color="primary" v-bind="props">
                                <span class="d-flex align-center ga-2">
                                    <DeviceLaptopIcon size="20" /> Live Preview <ChevronDownIcon size="20" />
                                </span>
                            </v-btn>
                        </template>
                        <v-list density="compact" elevation="10">
                            <v-list-item v-for="(item, index) in preview_link" :key="index" :value="index" :href="item.url" target="_blank">
                                <v-list-item-title class="d-flex align-center ga-2">
                                    <WindowMaximizeIcon size="18" /> {{ item.title }}</v-list-item-title
                                >
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                <span class="d-flex ga-2 align-center">
                                    <ShoppingCartIcon size="20" /> Buy Now <ChevronDownIcon size="20" />
                                </span>
                            </v-btn>
                        </template>
                        <v-list density="compact" elevation="10">
                            <v-list-item v-for="(item, index) in buy_link" :key="index" :value="index" :href="item.url" target="_blank">
                                <v-list-item-title class="d-flex align-center ga-2">
                                    <WindowMaximizeIcon size="18" /> {{ item.title }}</v-list-item-title
                                >
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </div>
    </div>
</template>
