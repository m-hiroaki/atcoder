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

    ll bingo[3][3];

    for (int i = 0; i < 3; i++)
    {

        cin >> bingo[i][0] >> bingo[i][1] >> bingo[i][2];
    }

    cin >> N;

    for (int i = 0; i < N; i++)
    {
        ll tmp;
        cin >> tmp;
        for (int a = 0; a < 3; a++)
        {
            for (int b = 0; b < 3; b++)
            {
                if (bingo[a][b] == tmp)
                {
                    bingo[a][b] = 0;
                }
            }
        }
    }

    bool f = false;
    for (int a = 0; a < 3; a++)
    {
        for (int b = 0; b < 3; b++)
        {
            if (bingo[a][b] != 0)
            {
                f = false;
                break;
            }
            f = true;
        }

        if (f)
        {
            cout << "Yes" << endl;
            return 0;
        }
    }

    f = false;
    for (int a = 0; a < 3; a++)
    {
        for (int b = 0; b < 3; b++)
        {
            if (bingo[b][a] != 0)
            {
                f = false;
                break;
            }
            f = true;
        }

        if (f)
        {
            cout << "Yes" << endl;
            return 0;
        }
    }

    f = true;
    for (int a = 0; a < 3; a++)
    {
        if (bingo[a][a] != 0)
        {
            f = false;
            break;
        }
    }

    if (f)
    {
        cout << "Yes" << endl;
        return 0;
    }

    f = true;
    for (int a = 0; a < 3; a++)
    {
        if (bingo[a][2 - a] != 0)
        {
            f = false;
            break;
        }
    }

    if (f)
    {
        cout << "Yes" << endl;
    }
    else
    {

        cout << "No" << endl;
    }

    return 0;
}
