<script setup lang="ts">
import { ref } from 'vue';
import { ProductTableData, tableActionData } from '@/data/Dashboard';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="px-0">
            <div class="px-6">
                <v-card-title class="text-h5 mb-1">Popular Products</v-card-title>
                <v-card-subtitle class="text-body-1">Total 9k Visitors</v-card-subtitle>
            </div>
            <perfect-scrollbar style="height: 450px">
                <v-table class="revenue-table border-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-h6 font-weight-semibold text-no-wrap">Products</th>
                                <th class="text-h6 font-weight-semibold text-no-wrap">Payment</th>
                                <th class="text-h6 font-weight-semibold text-no-wrap">Status</th>
                                <th class="text-h6 font-weight-semibold text-no-wrap"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in ProductTableData" :key="item.name" class="month-item">
                                <td>
                                    <div class="d-flex align-center overflow-hidden">
                                        <img :src="item.img" alt="user" width="60" class="rounded-md" />
                                        <div class="mx-4" style="min-width: 250px">
                                            <h6 class="text-body-1 font-weight-semibold truncate-2">
                                                {{ item.name }}
                                            </h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5 class="text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap">
                                        {{ item.payment }}<span class="text-muted">/ 499</span>
                                    </h5>
                                    <div class="text-body-1 font-weight-medium text-muted mb-3 text-no-wrap">
                                        {{ item.paymentstatus }}
                                    </div>
                                    <div>
                                        <v-progress-linear
                                            :color="item.processcolor"
                                            rounded="sm"
                                            :model-value="item.process"
                                            bg-color="light"
                                        ></v-progress-linear>
                                    </div>
                                </td>
                                <td>
                                    <v-chip size="x-small" :color="item.statuscolor">{{ item.statustext }}</v-chip>
                                </td>
                                <td class="text-right">
                                    <v-btn size="30" icon variant="flat" class="grey100">
                                        <v-avatar size="22">
                                            <DotsVerticalIcon size="20" color="grey100" />
                                        </v-avatar>
                                        <v-menu activator="parent">
                                            <v-list elevation="10">
                                                <v-list-item
                                                    value="action"
                                                    v-for="list in tableActionData"
                                                    :key="list.listtitle"
                                                    hide-details
                                                    min-height="38"
                                                >
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
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </perfect-scrollbar>
        </v-card-item>
    </v-card>
</template>
