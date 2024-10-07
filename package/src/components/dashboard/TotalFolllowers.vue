<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { tableActionData } from '@/data/Dashboard';

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: '',
                data: [29, 52, 38, 47, 56]
            },
            {
                name: '',
                data: [71, 71, 71, 71, 71]
            }
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: 80,
            stacked: true,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 1,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        colors: ['rgba(var(--v-theme-error))', 'var(--black-black-10, rgba(17, 28, 45, 0.10))'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                borderRadius: [3],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark'
        },
        legend: {
            show: false
        }
    };
});
</script>
<template>
    <v-card elevation="10" class="bg-lighterror">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <div class="d-flex ga-3 align-center">
                    <div class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-error">
                        <Icon icon="solar:users-group-rounded-bold-duotone" width="25" height="25" class="text-white" />
                    </div>
                    <v-card-title class="text-h6 textSecondary font-weight-medium mb-0">Total followers</v-card-title>
                </div>

                <v-btn flat icon variant="text" rounded="full" class="">
                    <v-avatar size="22">
                        <DotsVerticalIcon size="20" color="grey100" />
                    </v-avatar>
                    <v-menu activator="parent">
                        <v-list elevation="10">
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
            <v-row class="d-flex justify-space-between  align-end ">
                <v-col cols="7" xl="5" class="mb-1">
                    <h2 class="text-h2 mb-3">4,562</h2>
                    <span class="text-12 rounded-pill px-2 py-1 lh-normal text-muted light-chip border border-muted font-weight-medium">+23% last month</span>
                </v-col>
                <v-col cols="5" xl="5" >
                    <div class="rounded-bars">
                        <apexchart type="bar" height="80" :options="chartOptions" :series="chartOptions.series"> </apexchart>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
