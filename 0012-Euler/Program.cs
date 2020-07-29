using System.Collections.Generic;
using System.Linq;

namespace _0012_Euler
{
    class Program
    {
        static void Main(string[] args)
        {
					problem3faster();
        }

				public static void problem1() {
						// + addition
						// - subtraction
						// * mult
						// / division (without remainder)
						// % division (remainder only)
						var sum = 0;
						// 1 2 3 4 5 6 7 8 9
						//     *   * *     *
						for (int x = 3; x < 1000; x++)
						{
							if(x % 3 == 0 || x % 5 == 0) {
								sum += x; // sum = sum + x
							}
						}
						System.Console.WriteLine(sum);
				}

				public static void problem2() {

					var sum = 2L;
					// int : 32bit number
					// long : 64bit number
					var x = 1;
					var y = 2;
					var next = x + y;

					while(next < 4_000_000) { // 4,000,000
						if(next % 2 == 0) {
							sum += next;
						}
						x = y;
						y = next;
						next = x + y;
					}
					System.Console.WriteLine(sum);
				}

				public static void problem3Sloooow() {
					var number = 600_851_475_143L;
					// var testNumber = 13_195L; // hoping for 29
					var primes = new List<long>();
					var factors = new List<long>();
					var i = 2L;
					// number / 71 = 8_462_696_833
					while (i < 8_462_696_833+1) {
						if(number % i == 0) {
							factors.Add(i);
						}
						i = (i == 2) ? i + 1 : i + 2;
						// above same as below
						// if (i == 2) {
						// 	i = i + 1;
						// } else {
						// 	i = i + 2;
						// }
					}

					var q = 2L;
					while (q <= factors[factors.Count()-1]){
						var isPrime = true;
						for(int j = 0; j < primes.Count(); j++) {
							if( q % primes[j] == 0) {
								isPrime = false;
							}
						}
						if(isPrime) {
							primes.Add(q);
						}
						// we forgot to increment q!
						q++;
					}

					for (var f = factors.Count()-1; f >= 0; f--){
						foreach (var pr in primes)
						{
							if(pr == factors[f]){
								System.Console.WriteLine("PRIME FOUND");
								System.Console.WriteLine(pr);
								return;
							}
						}
						// System.Console.WriteLine("Not Prime: "+factors[f]);
					}
				}

				public static void problem3faster() {
					var number = 600_851_475_143L;
					// var testNumber = 13_195L; // hoping for 29
					var primes = new List<long>();
					var factors = new List<long>();
					var i = 2L;
					// number / 71 = 8_462_696_833
					while (i < 8_462_696_833+1) {
						if(number % i == 0) {
							factors.Add(i);
						}
						i = (i == 2) ? i + 1 : i + 2;
					}

					// how we get primes can be improved
					var q = 2L;
					// big improvement here, we stop at the square-root of 'number' which makes sense. In this case, its around 700k, which isn't unbearable.
					while (q*q < number)
					{
						var t = primes.Any(x => q % x == 0);
						// if true, not prime
						if(!t) {
							primes.Add(q);
						}
						// THE BIG FIND : gotta increment q or it will run forever! and we were forced to watch lol!
						q = (q == 2) ? q + 1 : q + 2; // instead of incrementing by 1, we increment by 2
						// q++;
					}

					// how we find largest match can be improved
					// use Intersect() function to get the list of numbers both lists contain.
					// then use Max() function to give me the largest number
					var largest = factors.Intersect(primes).Max();
					System.Console.WriteLine(largest);
				}
    }
}
