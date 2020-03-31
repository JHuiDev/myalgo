/**
 * 冒泡排序是稳定排序，两数比较相等时未交换位置
 * @param {Array} arr 
 */
function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        let check = true
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                check = false;
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
        //如若在在一次检查中都没有出现交换的情况则将它判定为以有序，提出循环
        if(check) break;
    }    
    return arr;
}
let arr = [1,2,3,4,5,6,7,8];
bubbleSort(arr);
console.log(arr);