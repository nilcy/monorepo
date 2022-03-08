- [コンテナサービス](#コンテナサービス)
- [DB サービス(`./db`)](#db-サービスdb)

# コンテナサービス

> ブックマーク: [`Docker`](https://www.docker.com/)

```sh
sudo service docker start
```

# DB サービス(`./db`)

> ブックマーク: [`PostgreSQL`](https://www.postgresql.org/)

DB サービスを開始する

```sh
docker-compose up -d
```

DB サービスへ接続する (パスワードは `password`)

```sh
psql -h localhost db -U user
```

DB サービスを確認する

```sh
docker-compose ps -a
```

DB サービスを停止する

```sh
docker-compose stop
```

DB サービスを削除する

```sh
docker-compose rm -f
```
