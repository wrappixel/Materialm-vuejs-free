<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
const select = ref('This Week');
const items = ref(['April 2024', 'May 2024', 'June 2024']);
/* Chart */
const areachartOptions = computed(() => {
    return {
        chart: {
            height: 305,
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            fontSize: '12px',
            offsetX: 0,
            offsetY: 10,
            animations: {
                speed: 500
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#00A1FF', '#adb0bb'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.4,
                opacity: 0.3,
                stops: [100]
            }
        },
        grid: {
            show: true,
            strokeDashArray: 3,
            borderColor: '#90A4AE50'
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            tickAmount: 3
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        }
    };
});

const areaChart = {
    series: [
        {
            type: 'area',
            name: 'This Year',
            chart: {
                foreColor: '#111c2d99',
                fontSize: 12,
                fontWeight: 500,
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Aug',
                    y: 25
                },
                {
                    x: 'Sep',
                    y: 25
                },
                {
                    x: 'Oct',
                    y: 10
                },
                {
                    x: 'Nov',
                    y: 10
                },
                {
                    x: 'Dec',
                    y: 45
                },
                {
                    x: 'Jan',
                    y: 45
                },
                {
                    x: 'Feb',
                    y: 75
                },
                {
                    x: 'Mar',
                    y: 70
                },
                {
                    x: 'Apr',
                    y: 35
                }
            ]
        },
        {
            type: 'line',
            name: 'Last Year',
            chart: {
                foreColor: '#111c2d99'
            },
            data: [
                {
                    x: 'Aug',
                    y: 50
                },
                {
                    x: 'Sep',
                    y: 50
                },
                {
                    x: 'Oct',
                    y: 25
                },
                {
                    x: 'Nov',
                    y: 20
                },
                {
                    x: 'Dec',
                    y: 20
                },
                {
                    x: 'Jan',
                    y: 20
                },
                {
                    x: 'Feb',
                    y: 35
                },
                {
                    x: 'Mar',
                    y: 35
                },
                {
                    x: 'Apr',
                    y: 60
                }
            ]
        }
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5">Sales Profit</v-card-title>
                <div>
                    <v-select
                        v-model="select"
                        :items="items"
                        density="compact"
                        rounded="pill"
                        elevation="0"
                        class="text-body-1"
                        hide-details
                    ></v-select>
                </div>
            </div>
            <div class="ms-n4">
                <apexchart type="area" height="305" :options="areachartOptions" :series="areaChart.series"> </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
