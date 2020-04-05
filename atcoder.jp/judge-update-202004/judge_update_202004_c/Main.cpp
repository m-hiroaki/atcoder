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
   if (a%b == 0)
   {
       return(b);
   }
   else
   {
       return(gcd(b, a%b));
   }
}

ll lcm(ll a, ll b)
{
   return a * b / gcd(a, b);
}

int main()
{
    ll tmp[3][3] = {0};

    ll a[3];
    cin >> a[0] >> a[1] >> a[2];

    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3 - a[i]; j++){
            tmp[j][i] = 10;
        }
    }

    ll n = a[0] + a[1] + a[2];

    vector<ll> v(n);

    for (int i = 0; i < n; i++){
        v[i] = i + 1;
    }

    ll ans = 0;
    do
    {
        int val = 0;
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++){
                if(tmp[2-i][j] == 10){
                    continue;
                }
                tmp[2 - i][j] = v[val++];
            }
        }

        bool f = true;
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                if(i==0 && j==0){
                    continue;
                }
                else if(i==0){
                    if(tmp[2-i][j] < tmp[2-i][j-1]){
                        f = false;
                    }
                }
                else if(j==0){
                    if (tmp[2 - i][j] < tmp[2 - i + 1][j])
                    {
                        f = false;
                    }
                }
                else
                {
                    if (tmp[2 - i][j] < tmp[2 - i][j - 1])
                    {
                        f = false;
                    }
                    else if (tmp[2 - i][j] < tmp[2 - i + 1][j]){
                        f = false;
                    }
                }
            }
        }

        if(f)
            ans++;

    } while (std::next_permutation(v.begin(), v.end()));

    cout << ans << endl;
    return 0;
}