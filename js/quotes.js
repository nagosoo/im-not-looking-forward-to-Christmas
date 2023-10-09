const quotes = [
    {
        quote: "안되면 되는거 해라",
    },
    {
        quote: "맨날 최선을 다하지는 말아라\n피곤해서 못산다!",
    },
    {
        quote: "노력없이 성과를 이루고 싶다",
    },
    {
        quote: "힘들땐 툭툭 털고 일어나요\n힘들게 하는 사람 강냉이를",
    },
    {
        quote: "하루하루는 성실하게,\n인생 전체는 되는대로",
    },
    {
        quote: "지지말자",
    },
    {
        quote: "그럼에도 불구하고\n 오늘을 살아가보자",
    },
    {
        quote: "다 울었니\n이제 할일을 하자",
    },
    {
        quote: "견뎌",
    },
    {
        quote: "하다보면 잘하게 된다!",
    }
];

const quoteContentElement = document.querySelector('.quote-container .quote-content');

quoteContentElement.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;