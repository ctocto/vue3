import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'



import { Col, Row } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Form, Field, RadioGroup, Radio } from 'vant';

import { AddressEdit } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';

// import axios from 'axios';
// import VueAxios from 'vue-axios';


const app = createApp(App)

app.use(Col);
app.use(Row);
app.use(Button);
app.use(Cell);
app.use(CellGroup);
app.use(Field);
app.use(Form);
app.use(Radio);
app.use(RadioGroup);

app.use(AddressEdit);
app.use(Area);
app.use(Popup);

app.use(router);

// app.use(VueAxios, axios);
// app.use(axios);

app.mount('#app')

