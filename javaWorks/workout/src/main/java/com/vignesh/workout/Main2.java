package com.vignesh.workout;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

public class Main2 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);
		int N = Integer.parseInt(br.readLine().trim());
		String[] arr_A = br.readLine().split(" ");
		int[] A = new int[N];
		for (int i_A = 0; i_A < arr_A.length; i_A++) {
			A[i_A] = Integer.parseInt(arr_A[i_A]);
		}

		long out_ = SimilarElementsPairs(A, N);
		System.out.println(out_);

		wr.close();
		br.close();
	}

	static long SimilarElementsPairs(int[] A, int v) {
			Arrays.sort(A);
			int count = 0;
			int same = 1;
			long total = 0;
			for (int i = 0; i < A.length - 1; i++) {
				if (A[i] == A[i + 1] + 1 || A[i]+1 == A[i + 1]) {
					count = count + 1;
				} else if (A[i] == A[i + 1]) {
						same = same + 1;
				} else {
					if(count>0) {
					same=same-1;
					count=count+same;
					total=total+count*(count+1)/2;
					}
					same=1;
					count=0;
				}
	
			}
			if(count>0) {
			same=same-1;
			count=count+same;
			total=total+count*(count+1)/2;
			}
			
	
			return total;
	}

}
