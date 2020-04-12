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
    if (s.length() == (size_t)N)
    {
        cout << s.c_str() << endl;
    }
    else
    {
        for (char c = 'a'; c <= mx; c++)
        {
            dfs(s + c, ((c == mx) ? (char)(mx) : mx), N);
        }
    }
}

int bfs(int a, int b, int h, int w, char tmp[][101])
{
    int ans[101][101] = {0};
    char c[101][101] = {0};
    queue<pair<int, int>> s;

    for (int i = 0; i <= h; i++)
    {
        for (int j = 0; j <= w; j++)
        {
            c[i][j] = tmp[i][j];
        }
    }

    s.push(make_pair(a, b));

    while (s.size() > 0)
    {

        pair<int, int> tmp = s.front();
        s.pop();
        c[tmp.first][tmp.second] = '#';
        for (int i = -1; i <= 1; i++)
        {
            for (int j = -1; j <= 1; j++)
            {
                if (tmp.first + i < 1 || tmp.first + i > h)
                {
                    continue;
                }
                if (tmp.second + j < 1 || tmp.second + j > w)
                {
                    continue;
                }
                if (i != 0 && j != 0)
                {
                    continue;
                }
                if (i == 0 && j == 0)
                {
                    continue;
                }
                if (c[tmp.first + i][tmp.second + j] == '#')
                {
                    continue;
                }
                c[tmp.first + i][tmp.second + j] = '#';
                if (ans[tmp.first + i][tmp.second + j] == 0)
                {
                    ans[tmp.first + i][tmp.second + j] = ans[tmp.first][tmp.second] + 1;
                }
                else
                {
                    ans[tmp.first + i][tmp.second + j] = min(ans[tmp.first + i][tmp.second + j], ans[tmp.first][tmp.second] + 1);
                }
                s.push(make_pair(tmp.first + i, tmp.second + j));
            }
        }
    }

    int asd = 0;

    for (int i = 1; i <= h; i++)
    {
        for (int j = 1; j <= w; j++)
        {
            asd = max(a, ans[i][j]);
        }
    }

    return asd;
}

ll gcd(ll a, ll b)
{
    if (a % b == 0)
    {
        return (b);
    }
    else
    {
        return (gcd(b, a % b));
    }
}

ll lcm(ll a, ll b)
{
    return a * b / gcd(a, b);
}

int main()
{
    ll n;
    string s;
    cin >> n >> s;

    ll ans = 0;

    vector<ll> R(n+1);
    R[0] = 0;
    vector<ll> G(n + 1);
    G[0] = 0;
    vector<ll> B(n + 1);
    B[0] = 0;

    for (int i = 1; i <= n; i++){
        if (s[i-1] == 'R'){
            R[i] = R[i - 1] + 1;
            G[i] = G[i - 1];
            B[i] = B[i - 1];
        }
        else if (s[i - 1] == 'G')
        {
            R[i] = R[i - 1];
            G[i] = G[i - 1] + 1;
            B[i] = B[i - 1];
        }
        else if (s[i - 1] == 'B')
        {
            R[i] = R[i - 1];
            G[i] = G[i - 1];
            B[i] = B[i - 1] + 1;
        }
    }

    bool r = false;
    bool g = false;
    bool b = false;

    for (int i = 0; i < n - 2; i++)
    {
        if (s[i] == 'R')
            r = true;
        else if (s[i] == 'G')
            g = true;
        else if (s[i] == 'B')
            b = true;

        for (int j = i + 1; j < n - 1; j++)
        {

            if (!r && s[j] == 'R')
                r = true;
            else if (!g && s[j] == 'G')
                g = true;
            else if (!b && s[j] == 'B')
                b = true;
            else
                continue;

            if(!r){
                ans += R[n] - R[j];
                if (2 * j - i < n && s[2 * j - i] == 'R')
                {
                    ans--;
                }
            }
            else if(!g){
                ans += G[n] - G[j];
                if (2 * j - i < n && s[2 * j - i] == 'G')
                {
                    ans--;
                }
            }
            else if (!b)
            {
                ans += B[n] - B[j];
                if (2 * j - i < n && s[2 * j - i] == 'B')
                {
                    ans--;
                }
            }

            if (s[j] == 'R')
                r = false;
            else if (s[j] == 'G')
                g = false;
            else if (s[j] == 'B')
                b = false;
        }

        if (s[i] == 'R')
            r = false;
        else if (s[i] == 'G')
            g = false;
        else if (s[i] == 'B')
            b = false;
    }

    cout << ans << endl;

    return 0;
}