# Create Turso Database

Automatically create and clone a [Turso database](https://turso.tech).

## Usage

### Branch

The most common use for the action is to create a new database from an existing database. This is useful for testing changes to your database schema or data in a separate branch.

Add the following to your workflow:

```yaml
name: Create Database for Branch
on: create

jobs:
  create_database:
    name: "Create Database"
    runs-on: ubuntu-latest
    steps:
      - name: Create Database
        uses: tursodatabase/create-database-action@v1
        with:
          organization_name: ${{ secrets.TURSO_ORGANIZATION_NAME }}
          api_token: ${{ secrets.TURSO_API_TOKEN }}
          existing_database_name: ${{ secrets.TURSO_DATABASE_NAME }}
          new_database_name: ${{ env.NEW_DATABASE_NAME }}
          # optional (will use group of existing database if not provided)
          # group_name: ${{ secrets.TURSO_GROUP_NAME }} (default: "default")
```
