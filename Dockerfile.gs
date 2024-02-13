FROM geosolutionsit/geoserver

USER root

RUN apt install -y wget

RUN mkdir ./downloads
RUN wget https://build.geoserver.org/geoserver/2.23.x/ext-latest/geoserver-2.23-SNAPSHOT-vectortiles-plugin.zip -O downloads/geoserver-2.23-SNAPSHOT-vectortiles-plugin.zip && unzip -o ./downloads/geoserver-2.23-SNAPSHOT-vectortiles-plugin.zip -d ./plugins 
RUN wget https://build.geoserver.org/geoserver/2.23.x/community-latest/geoserver-2.23-SNAPSHOT-cog-plugin.zip -O downloads/geoserver-2.23-SNAPSHOT-cog-plugin.zip && unzip -o ./downloads/geoserver-2.23-SNAPSHOT-cog-plugin.zip -d ./plugins 
RUN rm -rf ./downloads

CMD ["/entrypoint.sh"]
