#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

const long long MOD = 1000000007;
long long modpow(long long a, long long n, long long m)
{
    long long ans = 1;
    while (n)
    {
        if (n & 1)
        {
            ans = (ans * a) % m;
        }
        a = (a * a) % m;
        n >>= 1;
    }
    return ans;
}
long long combi(long long n, long long a)
{
    long long ans = 1, ans1 = 1;
    for (long long i = n - a + 1; i <= n; i++)
    {
        ans *= i % MOD;
        ans %= MOD;
    }

    for (long long i = 2; i <= a; i++)
        ans1 = (ans1 * i) % MOD;
    ans1 = modpow(ans1, MOD - 2, MOD);
    return ((ans % MOD) * ans1) % MOD;
}

int main()
{

    ll N;
    cin >> N;

    for (ll i = 1; i <= N; i++){
        bool f = false;
        if((i%2)==0){
            f = true;
            cout << "a";
        }
        if ((i % 3)==0)
        {
            f = true;
            cout << "b";
        }
        if ((i % 4)==0)
        {
            f = true;
            cout << "c";
        }
        if ((i % 5)==0)
        {
            f = true;
            cout << "d";
        }
        if ((i % 6)==0)
        {
            f = true;
            cout << "e";
        }

        if(!f) {
            cout << i;
        }

        cout << endl;
    }
    
    return 0;
}
