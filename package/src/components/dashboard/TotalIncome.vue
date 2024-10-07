<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { tableActionData } from '@/data/Dashboard'

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: 'monthly earnings',
                color: 'rgba(var(--v-theme-secondary))',
                data: [25, 66, 20, 40, 12, 58, 20]
            }
        ],
        chart: {
            id: 'total-income',
            type: 'area',
            height: 70,
            sparkline: {
                enabled: true
            },
            group: 'sparklines',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180]
            }
        },

        markers: {
            size: 0
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        }
    };
});
</script>
<template>
    <v-card elevation="10" class="bg-lightsecondary">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <div class="d-flex ga-3 align-center">
                    <div class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-secondary">
                        <Icon icon="solar:wallet-2-line-duotone" width="25" height="25" class="text-white" />
                    </div>
                    <v-card-title class="text-h6 textSecondary font-weight-medium mb-0">Total Income</v-card-title>
                </div>

                <v-btn flat icon variant="text" rounded="full" class="">
                    <v-avatar size="22">
                        <DotsVerticalIcon size="20" color="grey100" />
                    </v-avatar>
                    <v-menu activator="parent">
                        <v-list elevation="10" >
                            <v-list-item value="action" v-for="list in tableActionData" :key="list.listtitle" hide-details min-height="38" class="pe-6">
                                <v-list-item-title>
                                    <v-avatar size="20" class="mr-2">
                                        <component :is="list.icon" stroke-width="2" size="20" />
                                    </v-avatar>
                                    {{ list.listtitle }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
            <v-row class="d-flex justify-space-between align-end mt-5">
                <v-col cols="7" xl="5" class="mb-1">
                    <h2 class="text-h2 mb-3">$6,280</h2>
                    <span class="text-12 rounded-pill px-2 py-1 lh-normal text-muted border border-muted font-weight-medium">+18% last month</span>
                </v-col>
                <v-col cols="5" xl="5">
                    <apexchart type="area" height="70" :options="chartOptions" :series="chartOptions.series"> </apexchart>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
