from diagrams import Cluster, Diagram
from diagrams.generic.network import Switch
from diagrams.onprem.client import User
from diagrams.onprem.compute import Server
from diagrams.onprem.database import MongoDB
from diagrams.programming.framework import React
from diagrams.programming.language import Nodejs


class FullstackAppDiagram:
    @staticmethod
    def generate_diagram():
        with Diagram("Fullstack App Diagram", show=False):
            with Cluster("User"):
                user = User("User")
                user

            with Cluster("Client"):
                react = React("React")
                # material_ui = MaterialUI("Material UI")
                react
            # >> material_ui

            with Cluster("Server"):
                nodejs = Nodejs("Node.js")
                with Cluster("Database"):
                    mongodb = MongoDB("MongoDB")
                    nodejs >> mongodb

            user >> react
            react >> nodejs
            nodejs >> react


if __name__ == "__main__":
    FullstackAppDiagram.generate_diagram()
