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

    ll N, K;

    cin >> N >> K;

    if (N <= K)
    {
        cout << endl
             << 0 << endl;
        return 0;
    }

    priority_queue<ll> que;

    ll a;
    for (int i = 0; i < N; i++)
    {
        cin >> a;
        que.push(a);
    }

    for (int i = 0; i < K; i++)
    {
        que.pop();
    }

    ll ans = 0;
    while (que.size() > 0)
    {
        ans += que.top();
        que.pop();
    }

    cout << ans << endl;
    return 0;
}