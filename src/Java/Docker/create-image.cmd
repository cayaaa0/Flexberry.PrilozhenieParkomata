docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_parkomata-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_parkomata-java/app ../../..
