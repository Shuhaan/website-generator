import requests
from pprint import pprint


def get_repos():
    url = "https://api.github.com/users/Shuhaan/repos"
    # commits = "https://api.github.com/users/Shuhaan/website-generator/commits"
    response = requests.get(url)
    repos = response.json
    if response.status_code == 200:
        return repos
    else: 
        error_msg = "Cannot access repo"
        return error_msg

