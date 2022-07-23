Prisma CLI Info:

https://www.prisma.io/docs/reference/api-reference/command-reference

### Creating Migrations

https://www.prisma.io/docs/getting-started/quickstart#3-run-a-migration-to-create-your-database-tables-with-prisma-migrate

Migrate with npm:

```
npx prisma migrate dev --name init
```

Migrate with yarn:

```
yarn prisma migrate dev --name init
```

### Pulling DB schema into the prisma schema file

The `db pull` command connects to your database and adds Prisma models to your Prisma schema that reflect the current database schema.

Pull with npm (maybe?)

```
npx prisma db pull
```

Pull with yarn:

```
yarn prisma db pull
```
