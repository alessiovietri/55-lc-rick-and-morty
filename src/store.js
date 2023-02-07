import { reactive } from 'vue';

export const store = reactive({
    results: [],
    nameValue: '',
    statusValue: '',
    loading: false
});