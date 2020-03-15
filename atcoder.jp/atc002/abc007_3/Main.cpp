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

void dfs(string s, char mx, ll N)
{
    if (s.length() == N)
    {
        cout << s.c_str() << endl;
    }
    else
    {
        for (char c = 'a'; c <= mx; c++)
        {
            dfs(s + c, ((c == mx) ? (char)(mx + 1) : mx), N);
        }
    }
}

int main()
{
    ll R, C;
    cin >> R >> C;

    ll sx, sy;
    cin >> sy >> sx;
    ll gx, gy;
    cin >> gy >> gx;

    char c[60][60] = {0};
    int v[60][60] = {0};
    int tmp[60][60] = {0};

    for (int i = 1; i <= R; i++)
    {
        for (int j = 1; j <= C; j++)
        {
            cin >> c[i][j];
        }
    }

    queue<int> x;
    queue<int> y;

    x.push(sx);
    y.push(sy);
    while (x.size() > 0)
    {
        int tmpx = x.front(), tmpy = y.front();
        x.pop(), y.pop();
        tmp[tmpy][tmpx] = -1;

        for (int i = -1; i < 2; i++)
        {
            for (int j = -1; j < 2; j++)
            {
                if (i != 0 && j != 0)
                {
                    continue;
                }
                if (i == 0 && j == 0)
                {
                    continue;
                }
                if (c[tmpy + i][tmpx + j] == '#')
                {
                    tmp[tmpy + i][tmpx + j] = -1;
                    continue;
                }

                if (tmp[tmpy + i][tmpx + j] != -1)
                {
                    v[tmpy + i][tmpx + j] = v[tmpy][tmpx] + 1;
                    x.push(tmpx + j);
                    y.push(tmpy + i);
                    tmp[tmpy + i][tmpx + j] = -1;
                }
            }
        }
    }

    cout << v[gy][gx] << endl;
    return 0;
}
