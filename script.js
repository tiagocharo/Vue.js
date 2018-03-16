var app = new Vue({
    el: "#app",
    data: {
        chamada: 'KOÉEEEE RAPAZIAAAADAAAAAA!!!!'
    }
})

var app2 = new Vue({
    el: "#app2",
    data: {
        aviso: 'A página carregou em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            { texto: 'Primeira coisa' },
            { texto: 'Segunda coisa' },
            { texto: 'Pimba' }
        ]
    }
})

var app5 = new Vue({
    el: "#app5",
    data: {
        mensagem: 'REDRUM'
    },
    methods: {
        reverseMessage: function(){
            this.mensagem = this.mensagem.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: "#app6",
    data: {
        lembrete: 'Olá!'
    }
})