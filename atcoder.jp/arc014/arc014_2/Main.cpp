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

int bfs(int i, int j, int h, int w, char tmp[][21])
{
    int ans[21][21] = {0};
    char c[21][21] = {0};
    queue<pair<int, int>> s;

    for (int i = 0; i<=h; i++){
        for(int j=0; j<=w; j++){
            c[i][j] = tmp[i][j];
        }
    }

        s.push(make_pair(i, j));

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

    int a = 0;

    for (int i = 1; i <= h; i++)
    {
        for (int j = 1; j <= w; j++)
        {
            a = max(a, ans[i][j]);
        }
    }

    return a;
}


int main()
{
    int N;
    cin >> N;

    vector<string> keyword(N);
    for (int i = 0; i < N; i++){
        cin >> keyword[i];
    }

    bool f = true;
    set<string> end;
    end.insert(keyword[0]);
    for (int i = 1; i < N; i++)
    {
        if(end.find(keyword[i]) != end.end())
        {
            cout << (f ? "WIN" : "LOSE") << endl;
            return 0;
        }
        string now = keyword[i];
        string prev = keyword[i - 1];

        if (now[0] != prev[prev.length()-1])
        {
            cout << (f ? "WIN" : "LOSE") << endl;
            return 0;
        }
        end.insert(now);
        f = !f;
    }

    cout << "DRAW" << endl;
    return 0;
}