#include <bits/stdc++.h>
using namespace std;

typedef unsigned long long ll;
const long double PI = (acos(-1));
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

template <typename T>
bool next_combination(const T first, const T last, int k)
{
    const T subset = first + k;
    // empty container | k = 0 | k == n
    if (first == last || first == subset || last == subset)
    {
        return false;
    }
    T src = subset;
    while (first != src)
    {
        src--;
        if (*src < *(last - 1))
        {
            T dest = subset;
            while (*src >= *dest)
            {
                dest++;
            }
            iter_swap(src, dest);
            rotate(src + 1, dest + 1, last);
            rotate(subset, subset + (last - dest) - 1, last);
            return true;
        }
    }
    // restore
    rotate(first, subset, last);
    return false;
}

void dfs(vector<ll> s, ll mx, ll N, vector<vector<ll>> &arr)
{
    if (s.size() == (size_t)N)
    {
        //cout << s.c_str() << endl;
        arr.push_back(s);
    }
    else
    {
        for (ll c = s.size() > 0 ? 1 : 1; c <= mx; c++)
        {
            s.push_back(c);
            dfs(s, mx, N, arr);
            s.pop_back();
        }
    }

    return;
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

ll modfactorial(ll a)
{
    if(a==1)
        return 1;

    return (a % MOD) * (modfactorial(a - 1) % MOD);
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
    return (a / gcd(a, b)) * b;
}

map<ll, ll> prime_factor(ll n)
{
    map<ll, ll> ret;
    for (ll i = 2; i * i <= n; i++)
    {
        while (n % i == 0)
        {
            ret[i]++;
            n /= i;
        }
    }
    if (n != 1)
        ret[n] = 1;
    return ret;
}

int main()
{
    ll n;
    cin >> n;

    if(n<=2){
        cout << 1 << endl;
    }
    else if(n<=4){
        cout << 2 << endl;
    }
    else {

        vector<ll> v;

        for (int i = 0; i < n; i++){
            char tmp;
            cin >> tmp;
            if(tmp=='A'){
                v.push_back(1);
            }
            if (tmp == 'B')
            {
                v.push_back(2);
            }
            if(tmp=='X'){
                v.push_back(3);
            }
            if (tmp == 'Y')
            {
                v.push_back(4);
            }
        }

        vector<vector<ll>> arr;

        vector<ll> tmp;
        dfs(tmp, 4, 4, arr);

        ll ans = 1000000000;

        for (int c = 0; c < arr.size(); c++){
            vector<ll> tmp = arr[c];
            vector<ll> vtmp = v;
            if (tmp[0] == tmp[2] && tmp[1] == tmp[3])
            {
                continue;
            }

            ll lc = 0;
            ll rc = 0;
            for (int i = 0; i < n - 1; i++)
            {
                if (vtmp[i] == tmp[0] && vtmp[i + 1] == tmp[1])
                {
                    lc++;
                    vtmp[i] = 0;
                    vtmp[i + 1] = 0;
                }
            }
            for (int i = 0; i < n - 1; i++)
            {
                if (vtmp[i] == tmp[2] && vtmp[i + 1] == tmp[3])
                {
                    rc++;
                    vtmp[i] = 0;
                    vtmp[i + 1] = 0;
                }
            }

            ans = min(ans, n - (lc + rc));
        }

        cout << ans << endl;
    }


    return 0;
}
//cout << std::fixed << std::setprecision(15)

