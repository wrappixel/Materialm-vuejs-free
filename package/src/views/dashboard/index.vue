<script setup lang="ts">
/*Call Components*/
import RevenueCard from '@/components/dashboard/RevenueCard.vue';
import TotalFolllowers from '@/components/dashboard/TotalFolllowers.vue';
import Totalincome from '@/components/dashboard/TotalIncome.vue';
import RevenueProduct from '@/components/dashboard/RevenueProducts.vue';
import BlogCards from '@/components/dashboard/BlogCards.vue';
import EarningReports from '@/components/dashboard/EarningReports.vue';
</script>

<template>
    <v-row>
        <v-col cols="12" md="8"><RevenueCard /></v-col>
        <v-col cols="12" md="4"
            ><TotalFolllowers class="mb-6" />
            <Totalincome />
        </v-col>
        <v-col cols="12" lg="8"><RevenueProduct /></v-col>
        <v-col cols="12" lg="4"><EarningReports /> </v-col>
        <v-col cols="12"><BlogCards /></v-col>
        <v-col class="text-center mt-2">
            <p class="text-muted">Design and Developed by <a flat variant="text" href="https://wrappixel.com" target="_blank" class="pl-1 text-primary">wrappixel.com</a></p>
        </v-col>

    </v-row>

</template>
