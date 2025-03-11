console.log("hero");
// Color button
const colors = ['#f4c2c2', '#d8bfd8', '#fef9c3', '#d4f1f4', '#c5d0f1'];
let currentIndex = 0;

//Background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex++ % colors.length];
}

//Image icon
document.getElementById('color-change').addEventListener('click', changeBackgroundColor);

//Date
function formatDate() {
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    const [weekday, month, day, year] = formattedDate.split(' ');
    document.getElementById("date").innerHTML = `${weekday}<br> <span class="font-bold"> ${month} ${day} ${year}`;
}
formatDate();


//Connect with blog page
document.getElementById("discoNew").addEventListener("click",function(){
    window.location.href = "./blog.html";
    });
    

//Clear text
    function clearText(button) {
        const takku = document.getElementById("showtext");
        takku.innerText="";
     }
