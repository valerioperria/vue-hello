const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "Hello there!",
            colorTitle: "blue",
            imgKenobi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm--oC7ypIGZBrp24iLmivO4p-Me40Hgvu3w&usqp=CAU",
            answer: "",
            colorAnswer: "red",
            imgGrievous: ""
        }
    },
    methods: {
        grievous: function () {
            this.answer = "General Kenobi",
            this.imgGrievous = "https://i.ytimg.com/vi/frszEJb0aOo/maxresdefault.jpg"
        }

    }
})

app.mount("#app");