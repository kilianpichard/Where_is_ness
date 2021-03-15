import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F8AE28',
                secondary: '#24BAF2',
                back: '#F6F7F8',
                error: '#b71c1c',
                title: '#000001',
                text: '#8B8B8B'
            },
        },
    },
});
