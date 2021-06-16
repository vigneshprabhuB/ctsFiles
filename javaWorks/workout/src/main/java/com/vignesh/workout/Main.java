package com.vignesh.workout;

import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException {
		int a1[]= {0,5,7,8,11,33,41,53};
		int searchValue=11;
		int startValue=0,endValue=a1.length-1;
		
		while(startValue<=endValue) {
			int mid=(startValue+endValue)/2;
			if(a1[mid]==searchValue || startValue==endValue) {
				System.out.println("Position:::"+mid);
				break;
			}
			if(searchValue>a1[mid]) {
				//right
				startValue=mid+1;
			}
			if(searchValue<a1[mid]) {
				//left
				endValue=mid-1;
			}
			
		}
		new Main().binarySearch(0, a1.length-1, searchValue, a1);
		
	}
	
	
	 void binarySearch(int startValue,int endValue,int searchValue,int []searchArray){
			int mid=(startValue+endValue)/2;
			if(searchArray[mid]==searchValue || startValue==endValue) {
				System.out.println("-----");

				System.out.println("Position:::"+searchArray[mid]);
				return ;
			}
			if(searchValue>searchArray[mid]) {
				//right
				System.out.println("-----");

				startValue=mid+1;
				binarySearch(startValue, endValue, searchValue, searchArray);
			}
			if(searchValue<searchArray[mid]) {
				//left'
				System.out.println("-----");

				endValue=mid-1;
				binarySearch(startValue, endValue, searchValue, searchArray);
			}
			
	}
		
}
