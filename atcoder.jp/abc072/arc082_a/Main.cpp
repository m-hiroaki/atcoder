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

    for (int i = 0; i<=h; i++){
        for(int j=0; j<=w; j++){
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


int main()
{
    ll N;
    cin >> N;

    map<ll, ll> m;

    for(int i=0; i<N; i++){
        ll tmp;
        cin >> tmp;

        if(tmp != 0){
            m[tmp-1]++;
        }
        m[tmp]++;
        if(tmp < 100000){
            m[tmp+1]++;
        }
    }

    int ans = 0;
  for( auto i = m.begin(); i != m.end() ; ++i ) {
      ans = max(ans, (int)i->second);
  }

    cout << ans << endl;
    return 0;
}