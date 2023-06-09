//Mustache構文
<h1>{{ 変数名 }}</h1>

//v-if構文
<p v-if=displayTrue>Hello</p> //Helloと表示

//v-for
<ol>
      <li v-for="color in colors">{{color}}</li>
    </ol>

//v-model
<input type="text" v-model="message">
    <h1>{{ message }}</h1>   
