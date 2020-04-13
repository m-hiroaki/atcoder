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
    string s;
    cin >> s;

    vector<pair<char, ll>> v;

    bool f = true;
    ll cnt = 0;
    for (int i = 0; i < s.length(); i++)
    {
        if(f && s[i] == 'R'){
            cnt++;
        }
        else if (!f && s[i] == 'L')
        {
            cnt++;
        }
        else if (!f && s[i] == 'R')
        {
            v.push_back(make_pair('L', cnt));
            f = !f;
            i--;
            cnt = 0;
        }
        else if (f && s[i] == 'L')
        {
            v.push_back(make_pair('R', cnt));
            f = !f;
            i--;
            cnt = 0;
        }
    }
    if(f)
        v.push_back(make_pair('R', cnt));
    else
        v.push_back(make_pair('L', cnt));

    vector<ll> ans(s.length());
    ll idx = 0;
    for (int i = 0; i < v.size()/2; i++)
    {
        pair<char, ll> r = v[2*i];
        pair<char, ll> l = v[2*i + 1];

        ans[idx + r.second - 1] = ceil(r.second / 2.0) + floor(l.second / 2.0);
        ans[idx + r.second] = floor(r.second / 2.0) + ceil(l.second / 2.0);
        idx += r.second + l.second;
    }

    for (int i = 0; i < s.length(); i++){
        printf("%lld ", ans[i]);
    }
    printf("\n");
    return 0;
}
