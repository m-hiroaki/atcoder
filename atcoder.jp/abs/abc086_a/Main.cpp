#include<cstdio>
#include<iostream>

using namespace std;

int main()
{
  unsigned int a;
  unsigned int b;
  cin >> a;
  cin >> b;
  
  printf("%s", ((a*b)%2 == 0) ? "Even" : "Odd"); 
  
  return 0;
}