
// public class main{

//     public static void main(string[] args){
//         int[] arr={1,2,3,4,5,6,7};
//         int target=2;
//         int ans=search_linear(arr,target);

//     }

//     public static int search_linear(int[] arr,int target){
//         if(arr.length==0){
//             return -1;
//         }

//     for(int i=0;i<arr.length;i++){
//         int element=arr[i];
//         if(element==target){
//             return index;
//         }
//     }

//     return -1;
//     }
// } 
public class Main {

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        int target = 2;
        int ans = search_linear(arr, target);

        System.out.println("Index: " + ans);
    }

    public static int search_linear(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        for (int i = 0; i < arr.length; i++) {
            int element = arr[i];
            if (element == target) {
                return i; // corrected: return index i
            }
        }

        return -1;
    }
}
