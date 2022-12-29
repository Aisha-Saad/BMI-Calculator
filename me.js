
document.getElementById("submuit-btn").addEventListener("click",function() {


var weight = document.getElementById("weight-input").value
var height = document.getElementById("height-input").value

var bmi = weight/(height*height)
document.getElementById("bmi").innerHTML=bmi



var bmiCatoegory="نحيف"

if (bmi<18){
    bmiCatoegory=" نحيف"
}else if (bmi <24.9){
    bmiCatoegory="وزن مثالي"

}else if (bmi<29.9){
    bmiCatoegory="وزن زائد"
}else if(bmi<34.9){
    bmiCatoegory="سمنة درجة أولى"

    
}else if(bmi<39.9){
    bmiCatoegory="سمنة درجة ثانية"
}else{
    bmiCatoegory="سمنة خطيرة"
}
document.getElementById("bmi-catogry").innerHTML=bmiCatoegory


})
    

