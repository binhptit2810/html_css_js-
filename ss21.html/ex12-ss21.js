for (let i = 0; i < 5; i++) {
    let color;
    if (i === 0){
        color = 'red';
        console.log("%c Màu sắc đã được thay đổi", `color:${color};`);
    } else if (i === 1) {
        color = 'green';
        console.log("%c Màu sắc đã được thay đổi", `color:${color};`);
    }else if (i === 2){
        color = 'orange';
        console.log("%c Màu sắc đã được thay đổi", `color:${color};`);
    } else if (i === 3){
        color = 'pink';
        console.log("%c Màu sắc đã được thay đổi", `color:${color};`);
    } else {
        color = 'blue';
        console.log("%c Màu sắc đã được thay đổi", `color:${color};`);
    }
}