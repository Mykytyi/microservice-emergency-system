# Emergency System, MD approach

Emergency system which provides functionality to form notification templates,
add different contacts to your personal account, and ability to notify your contacts about your emergency situation 

### Prerequisites

* Node >20 LTS

### Start the local dev server

    npm install
    npm run start:dev
    npm run start:db 

### Migrations

Create a new migration:

    npx typeorm migration:create ./src/migration/<migration-name>

Run migration:

    typeorm migration:run -- -d path-to-datasource-config

Revert migration:

    typeorm migration:revert -- -d path-to-datasource-config

Other useful commands:

    // This will add the migration to the migrations table without running it.
    typeorm migration:run --fake 
    // This is also possible with rollbacks.
    typeorm migration:revert --fake
