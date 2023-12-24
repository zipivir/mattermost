Node js service for retrieving sources information 

Endpoints
=============

    getSources: return all the sources and their metadata that were retrieved for a given timestamp
        HTTP Method: GET
        URL: /api/v1/getSources
        Parameters: timestamp=1970-01-20

    Request and Response Example
    -----------------------------
        request: GET http://localhost:3000/api/v1/getSources?timestamp=1970-01-20
        response: success: 
        [
                {
                "metadata": {
                    "source": "C:\\Users\\Admin\\PycharmProjects\\demo\\DataSources\\test_ksa\\FP_20190107_new_geopolitics_of_mena_final.pdf"
                },
                "_id": "64f955ee30385971688c10df",
                "page_content": "WORLD PRODUCTION..Russia Iran..Iraq..Saudi Arabia U.S...Russia Iran..Iraq..90 million barrels per day..12 million barrels per day..75..10..60..8..45..6..30..4..15..2..0..0..1995..2000",
                "agent_loader": "US_KSA",
                "timestamp": "1970-01-20T14:34:22.062Z",
                "query": "How much illegal drugs did the Canadian National police authorities seize in kilograms?",
                "score": 1.6451629400253296,
                "message_id": "61n3t3s3bj8pxxbshzijcho35r",
                "Data Source": "US_KSA",
                "Score": 1.6451629400253296,
                "Source": "FP_20190107_new_geopolitics_of_mena_final.pdf"
            },
            { .... }
        ]