#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned long long ull;
const long double PI = (acos(-1));
const long long MOD = 1000000007;
struct Edge
{
    long long to;
    long long cost;
};
using Graph = vector<vector<Edge>>;
using P = pair<ll, ll>;
const long long INF = 1LL << 60;
#define ALL(a) (a).begin(), (a).end()
#define rep(i, n) for (int i = 0; i < n; i++)

bool is_prime(ll x)
{
    if (x == 1)
    {
        return false;
    }
    for (ll i = 2; i * i <= x; i++)
    {
        if (x % i == 0)
            return false;
    }
    return true;
}

long long modpow(long long a, long long n, long long mod)
{
    long long res = 1;
    while (n > 0)
    {
        if (n & 1)
            res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
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

void dfs(vector<ll> s, ll mi, ll mx, ll N, vector<vector<ll>> &arr)
{
    if (s.size() == (size_t)N)
    {
        //cout << s.c_str() << endl;
        arr.push_back(s);
    }
    else
    {
        for (ll c = s.size() > 0 ? 0 : mi; c <= mx; c++)
        {
            s.push_back(c);
            dfs(s, mi, mx, N, arr);
            s.pop_back();
        }
    }

    return;
}

int bfs(int sx, int sy, int gx, int gy, int h, int w, vector<vector<char>> map)
{
    queue<pair<int, int>> s;

    vector<vector<ll>> ans;

    for (int i = 0; i < h; i++)
    {
        vector<ll> aa(w);
        ans.push_back(aa);
    }

    s.push(make_pair(sx, sy));
    while (s.size() > 0)
    {

        pair<int, int> tmp = s.front();
        s.pop();
        map[tmp.first][tmp.second] = '#';
        for (int i = -1; i <= 1; i++)
        {
            for (int j = -1; j <= 1; j++)
            {
                if (tmp.first + i < 0 || tmp.first + i >= h)
                {
                    continue;
                }
                if (tmp.second + j < 0 || tmp.second + j >= w)
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
                if (map[tmp.first + i][tmp.second + j] == '#')
                {
                    continue;
                }
                map[tmp.first + i][tmp.second + j] = '#';
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

    return ans[gy][gx];
}

ll modfactorial(ll a)
{
    if (a == 1)
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

struct UnionFind
{
    //自身が親であれば、その集合に属する頂点数に-1を掛けたもの
    //そうでなければ親のid
    vector<int> r;

    UnionFind(int N)
    {
        r = vector<int>(N, -1);
    }

    int root(int x)
    {
        if (r[x] < 0)
            return x;
        return r[x] = root(r[x]);
    }

    bool unite(int x, int y)
    {
        x = root(x);
        y = root(y);
        if (x == y)
            return false;
        if (r[x] > r[y])
            swap(x, y);
        r[x] += r[y];
        r[y] = x;
        return true;
    }

    int size(int x)
    {
        return -r[root(x)];
    }
};

/* dijkstra(G,s,dis)
    入力：グラフ G, 開始点 s, 距離を格納する dis
    計算量：O(|E|log|V|)
    副作用：dis が書き換えられる
*/
void dijkstra(const Graph &G, int s, vector<ll> &dis, vector<ll> &prev)
{
    int N = G.size();
    dis.resize(N, INF);
    prev.resize(N, -1); // 初期化
    priority_queue<P, vector<P>, greater<P>> pq;
    dis[s] = 0;
    pq.emplace(dis[s], s);
    while (!pq.empty())
    {
        P p = pq.top();
        pq.pop();
        int v = p.second;
        if (dis[v] < p.first)
        {
            continue;
        }
        for (auto &e : G[v])
        {
            if (dis[e.to] > dis[v] + e.cost)
            {
                dis[e.to] = dis[v] + e.cost;
                prev[e.to] = v; // 頂点 v を通って e.to にたどり着いた
                pq.emplace(dis[e.to], e.to);
            }
        }
    }
}

vector<ll> get_path(const vector<ll> &prev, ll t)
{
    vector<ll> path;
    for (ll cur = t; cur != -1; cur = prev[cur])
    {
        path.push_back(cur);
    }
    reverse(path.begin(), path.end()); // 逆順なのでひっくり返す
    return path;
}

vector<string> split(string &s, char delim)
{
    vector<string> elems;
    stringstream ss(s);
    string item;
    while (getline(ss, item, delim))
    {
        if (!item.empty())
        {
            elems.push_back(item);
        }
    }
    return elems;
}

vector<ll> divisor(ll n)
{
    vector<ll> ret;
    for (ll i = 1; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            ret.push_back(i);
            if (i * i != n)
                ret.push_back(n / i);
        }
    }
    sort(begin(ret), end(ret));
    return (ret);
}

int main()
{
    ll n;

    cin >> n;

    map<ll, ll> m;

    rep(i, n)
    {
        ll tmp;
        cin >> tmp;

        if(tmp>=1 && tmp<400){
            m[0]++;
        }
        else if (tmp >= 400 && tmp < 800)
        {
            m[1]++;
        }
        else if (tmp >= 800 && tmp < 1200)
        {
            m[2]++;
        }
        else if (tmp >= 1200 && tmp < 1600)
        {
            m[3]++;
        }
        else if (tmp >= 1600 && tmp < 2000)
        {
            m[4]++;
        }
        else if (tmp >= 2000 && tmp < 2400)
        {
            m[5]++;
        }
        else if (tmp >= 2400 && tmp < 2800)
        {
            m[6]++;
        }
        else if (tmp >= 2800 && tmp < 3200)
        {
            m[7]++;
        }
        else{
            m[8]++;
        }
    }

    ll mm = 0;
    ll m8 = 0;
    for (auto i = m.begin(); i != m.end(); i++)
    {
        if(i->first==8){
            m8 = i->second;
        }
        else{
            mm++;
        }
    }

    if(mm==0)
    {
        cout << 1 << " " << m8 << endl;
    }
    else{
        cout << mm << " " << mm + m8 << endl;
    }

    return 0;
}
//cout << std::fixed << std::setprecision(15)
