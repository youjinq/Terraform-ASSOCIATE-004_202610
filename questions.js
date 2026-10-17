window.QUESTIONS = [
  {
    "id": 1,
    "number": 1,
    "topic": 1,
    "question": "IaC (Infrastructure as Code) can be stored in a version control system along with application code.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 2,
    "number": 2,
    "topic": 1,
    "question": "It is best practice to store secret data in the same version control repository as your Terraform configuration.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 3,
    "number": 3,
    "topic": 1,
    "question": "Which is an advantage of using IaC (Infrastructure as Code) that is not possible when provisioning with a GUI\n(Graphical User Interface)?",
    "options": [
      {
        "key": "A",
        "text": "Let’s you version, reuse, and share infrastructure configuration."
      },
      {
        "key": "B",
        "text": "Secures your credentials."
      },
      {
        "key": "C",
        "text": "Provisions the same resources at a lower cost."
      },
      {
        "key": "D",
        "text": "Prevents manual modifications to your resources."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 4,
    "number": 4,
    "topic": 1,
    "question": "What is an advantage of immutable infrastructure?",
    "options": [
      {
        "key": "A",
        "text": "Automatic infrastructure upgrades"
      },
      {
        "key": "B",
        "text": "In-place infrastructure upgrades"
      },
      {
        "key": "C",
        "text": "Quicker infrastructure upgrades"
      },
      {
        "key": "D",
        "text": "Less complex infrastructure upgrades"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "ykamal4 months, 1 week ago\nSelected Answer: D\nAI said its D.\nSrikantha4 months, 2 weeks ago\nSelected Answer: D\nD. Less complex infrastructure upgrades is the correct advantage of immutable infrastructure. Immutable\ninfrastructure treats servers, VMs, or resources as immutable (unchanging once deployed). To apply updates, fixes, or\nchanges, you create entirely new instances from a known, versioned image or template and then replace (or\ndecommission) the old ones, rather than modifying them in place. This contrasts with mutable infrastructure, where\nyou update existing resources directly (e.g., via patches, config changes, or SSH).\nmai_will5 months ago\nSelected Answer: C\nEmbora \"mais rápido\" possa parecer subjetivo, refere-se à previsibilidade e à velocidade de implementação inerentes\nao modelo imutável. Em vez de acessar servidores e executar scripts de atualização que podem travar ou falhar,\nvocê simplesmente substitui a versão antiga por uma nova pré-configurada.",
    "votes": "Community vote distribution\nC (60%) D (40%)",
    "images": []
  },
  {
    "id": 5,
    "number": 5,
    "topic": 1,
    "question": "What is the primary purpose of IaC (Infrastructure as Code)?",
    "options": [
      {
        "key": "A",
        "text": "To define a pipeline to test and deliver software."
      },
      {
        "key": "B",
        "text": "To provision infrastructure cheaply."
      },
      {
        "key": "C",
        "text": "To programmatically create and configure resources."
      },
      {
        "key": "D",
        "text": "To define a vendor-agnostic API."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 6,
    "number": 6,
    "topic": 1,
    "question": "Your team adopts an AWS CloudFormation as the standardized method for provisioning public cloud resources.\nWhich scenario presents a challenge for your team?",
    "options": [
      {
        "key": "A",
        "text": "Deploying new infrastructure into Microsoft Azure."
      },
      {
        "key": "B",
        "text": "Automating a manual, web console-based provisioning process."
      },
      {
        "key": "C",
        "text": "Building a reusable code base that can deploy resources into any AWS region."
      },
      {
        "key": "D",
        "text": "Managing a new application stack built on AWS-native services."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "pverma203 months ago\nSelected Answer: A\nCloud formation is specifically for AWS, therefore when deploying to Azure, we will require azure specific tool and\nhave to utilize azure templates.",
    "votes": "Community vote distribution\nA (100%)",
    "images": []
  },
  {
    "id": 7,
    "number": 7,
    "topic": 1,
    "question": "Which is not a benefit of adopting IaC (Infrastructure as Code)?",
    "options": [
      {
        "key": "A",
        "text": "Reusability of code"
      },
      {
        "key": "B",
        "text": "Automation"
      },
      {
        "key": "C",
        "text": "A GUI (Graphical User Interface)"
      },
      {
        "key": "D",
        "text": "Versioning"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 8,
    "number": 8,
    "topic": 1,
    "question": "How does the use of Infrastructure as Code (IaC) enhance the reliability of your infrastructure? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Configuration drift is reduced with declarative definitions."
      },
      {
        "key": "B",
        "text": "Updates are deployed with zero downtime."
      },
      {
        "key": "C",
        "text": "Proposed changes can be reviewed before being applied."
      },
      {
        "key": "D",
        "text": "Incorrect configurations cannot be deployed."
      },
      {
        "key": "E",
        "text": "Infrastructure is automatically scaled to meet demand."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 9,
    "number": 9,
    "topic": 1,
    "question": "Your team often uses API calls to create and manage cloud infrastructure.\nIn what ways does Terraform differ from conventional infrastructure management approaches?",
    "options": [
      {
        "key": "A",
        "text": "Terraform replaces cloud provider APIs with its own protocols, enabling automated deployments."
      },
      {
        "key": "B",
        "text": "Terraform describes infrastructure with version-controlled, repeatable configurations that specify the\ndesired state."
      },
      {
        "key": "C",
        "text": "Terraform is merely a wrapper for cloud provider APIs, so there is little to no difference in calling the API\ndirectly."
      },
      {
        "key": "D",
        "text": "Terraform enforces infrastructure through imperative scripts to ensure tasks are completed in the proper\norder."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 10,
    "number": 10,
    "topic": 1,
    "question": "Which of these workflows is only enabled by the use of Infrastructure as Code?",
    "options": [
      {
        "key": "A",
        "text": "Automatic scaling of resources based on application load."
      },
      {
        "key": "B",
        "text": "Cost optimization of infrastructure deployment."
      },
      {
        "key": "C",
        "text": "Role-based access control of cloud resources."
      },
      {
        "key": "D",
        "text": "Reviewing the proposed changes for potential security issues."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 11,
    "number": 11,
    "topic": 1,
    "question": "What does Terraform use to deploy infrastructure for different cloud providers?",
    "options": [
      {
        "key": "A",
        "text": "Custom APIs developed by HashiCorp"
      },
      {
        "key": "B",
        "text": "Vendors’ CLI tools"
      },
      {
        "key": "C",
        "text": "Vendors’ UI"
      },
      {
        "key": "D",
        "text": "Vendor-specific providers"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 12,
    "number": 1,
    "topic": 2,
    "question": "How can you enable verbose logging to troubleshoot?",
    "options": [
      {
        "key": "A",
        "text": "Set the log level command line flag."
      },
      {
        "key": "B",
        "text": "Set the TF_LOG environment variable."
      },
      {
        "key": "C",
        "text": "Set the log level in your terraform block."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 13,
    "number": 2,
    "topic": 2,
    "question": "Which command lets you experiment with Terraform expressions?",
    "options": [
      {
        "key": "A",
        "text": "terraform console"
      },
      {
        "key": "B",
        "text": "terraform env"
      },
      {
        "key": "C",
        "text": "terraform validate"
      },
      {
        "key": "D",
        "text": "terraform test"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "Srikantha4 months, 2 weeks ago\nSelected Answer: A\nThis is the correct command for experimenting with Terraform expressions.",
    "votes": "Community vote distribution\nA (100%)",
    "images": []
  },
  {
    "id": 14,
    "number": 3,
    "topic": 2,
    "question": "You can install Community/Partner plugins using terraform init.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "Srikantha4 months, 2 weeks ago\nSelected Answer: A\nterraform init does install Community and Partner plugins (providers).",
    "votes": "Community vote distribution\nA (100%)",
    "images": []
  },
  {
    "id": 15,
    "number": 4,
    "topic": 2,
    "question": "What functionality do providers offer in Terraform? (Choose three.)",
    "options": [
      {
        "key": "A",
        "text": "Group a collection of Terraform configuration files that map to a single state file."
      },
      {
        "key": "B",
        "text": "Provision resources for public cloud infrastructure services."
      },
      {
        "key": "C",
        "text": "Interact with cloud provider APIs."
      },
      {
        "key": "D",
        "text": "Enforce security and compliance policies."
      },
      {
        "key": "E",
        "text": "Provision resources for on-premises infrastructure services."
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "comments": "Srikantha4 months, 2 weeks ago\nSelected Answer: BCE\nB. Provision resources for public cloud infrastructure services. Providers (e.g., aws, azurerm, google) let you create,\nupdate, and delete resources in AWS, Azure, GCP, etc. C. Interact with cloud provider APIs. This is the core job of a\nprovider: it handles authentication, makes the actual API calls (create/read/update/delete), and translates Terraform’s\ndeclarative configuration into real infrastructure changes. E. Provision resources for on-premises infrastructure\nservices. Providers also support self-hosted/on-prem platforms (e.g., vsphere for VMware, openstack, bare-metal\nproviders, Kubernetes, databases, etc.). Terraform is not limited to public cloud.",
    "votes": "Community vote distribution\nBCE (100%)",
    "images": []
  },
  {
    "id": 16,
    "number": 5,
    "topic": 2,
    "question": "Terraform can only manage resource dependencies if you set them explicitly with the depends_on argument.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha4 months, 2 weeks ago\nSelected Answer: B\nTerraform can (and usually does) manage resource dependencies automatically through implicit dependencies — no\ndepends_on required in most cases.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 17,
    "number": 6,
    "topic": 2,
    "question": "Which of the following is not a valid Terraform collection type?",
    "options": [
      {
        "key": "A",
        "text": "set"
      },
      {
        "key": "B",
        "text": "list"
      },
      {
        "key": "C",
        "text": "map"
      },
      {
        "key": "D",
        "text": "tree"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 18,
    "number": 7,
    "topic": 2,
    "question": "A resource block is shown in the Exhibit space of this page.\nresource “aws_vpc” “main” {\nname = “test”\n}\nWhat is the provider for this resource?",
    "options": [
      {
        "key": "A",
        "text": "main"
      },
      {
        "key": "B",
        "text": "vpc"
      },
      {
        "key": "C",
        "text": "aws"
      },
      {
        "key": "D",
        "text": "test"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: C\nC. aws The provider for this resource is aws. How Terraform identifies the provider In a Terraform resource block, the\nsyntax is always: hclresource \"<RESOURCE_TYPE>\" \"<RESOURCE_NAME>\" { ... } RESOURCE_TYPE = aws_vpc\nThe part before the first underscore (aws) tells Terraform which provider is responsible for this resource. The part after\nthe underscore (vpc) is the specific resource type offered by that provider. RESOURCE_NAME = main This is just a\nlocal identifier (used for referencing the resource inside your configuration). It has nothing to do with the provider.",
    "votes": "Community vote distribution\nC (100%)",
    "images": []
  },
  {
    "id": 19,
    "number": 8,
    "topic": 2,
    "question": "You must use different Terraform commands depending on the cloud provider you use.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 20,
    "number": 9,
    "topic": 2,
    "question": "Terraform providers are always installed from the internet.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: B\nB. False Terraform providers are not always installed from the internet. While the default behavior (when you run\nterraform init) is to download providers from the public Terraform Registry at registry.terraform.io (or a private registry),\nTerraform provides built-in support for offline / air-gapped installations through provider mirrors.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 21,
    "number": 10,
    "topic": 2,
    "question": "You need to determine from which paths Terraform is loading the providers referenced in your *.tf files.\nHow can you enable additional logging to see this information?",
    "options": [
      {
        "key": "A",
        "text": "Set the environment variable TF_VAR_log=TRACE."
      },
      {
        "key": "B",
        "text": "Set the environment variable TF_LOG=TRACE."
      },
      {
        "key": "C",
        "text": "Set the environment variable TF_LOG=PATH."
      },
      {
        "key": "D",
        "text": "Set verbose logging for each provider in your Terraform configuration."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: B\nB. Set the environment variable TF_LOG=TRACE. This is the official, recommended way to enable detailed logging in\nTerraform so you can see exactly which filesystem paths it is searching for and loading providers from (including the\nplugin cache, filesystem mirrors, dev overrides, and any custom directories)",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 22,
    "number": 11,
    "topic": 2,
    "question": "Terraform requires using a different provider for each cloud provider where you want to deploy resources.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 23,
    "number": 12,
    "topic": 2,
    "question": "Terraform cannot use a newly-defined cloud backend until it has been initialized with terraform init.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 24,
    "number": 13,
    "topic": 2,
    "question": "You have a list of numbers that represents the number of free CPU cores on each virtual cluster: numcpus = [\n18, 3, 7, 11, 2]\nWhat Terraform built-in function would you use to select the largest number from the list?",
    "options": [
      {
        "key": "A",
        "text": "top(numcpus)"
      },
      {
        "key": "B",
        "text": "max(numcpus)"
      },
      {
        "key": "C",
        "text": "ceil(numcpus)"
      },
      {
        "key": "D",
        "text": "high[numcpus]"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 25,
    "number": 14,
    "topic": 2,
    "question": "Which of these is stored in the .terraform directory?",
    "options": [
      {
        "key": "A",
        "text": "Providers and modules"
      },
      {
        "key": "B",
        "text": "Lock file"
      },
      {
        "key": "C",
        "text": "State file"
      },
      {
        "key": "D",
        "text": "Configuration files"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: A\nA. Providers and modules The hidden .terraform directory (created automatically by terraform init) is Terraform’s local\ncache for providers and modules.",
    "votes": "Community vote distribution\nA (100%)",
    "images": []
  },
  {
    "id": 26,
    "number": 15,
    "topic": 2,
    "question": "A variable block is shown in the Exhibit space on this page:\nYou will use this variable as the value for the tags argument in several resources. The data format must be a set\nof key value pairs.\nWhich type argument would you use?",
    "options": [
      {
        "key": "A",
        "text": "type = map(string)"
      },
      {
        "key": "B",
        "text": "type = any"
      },
      {
        "key": "C",
        "text": "type = list(string)"
      },
      {
        "key": "D",
        "text": "type = object({ tags = string})"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": [
      "assets/X76.png"
    ]
  },
  {
    "id": 27,
    "number": 16,
    "topic": 2,
    "question": "Which of the following is allowed as a Terraform variable name?",
    "options": [
      {
        "key": "A",
        "text": "name"
      },
      {
        "key": "B",
        "text": "source"
      },
      {
        "key": "C",
        "text": "version"
      },
      {
        "key": "D",
        "text": "count"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 28,
    "number": 17,
    "topic": 2,
    "question": "Terraform providers are part of the Terraform core binary.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 29,
    "number": 18,
    "topic": 2,
    "question": "Where can Terraform not load a provider from?",
    "options": [
      {
        "key": "A",
        "text": "Provider plugin cache"
      },
      {
        "key": "B",
        "text": "Source code"
      },
      {
        "key": "C",
        "text": "Official HashiCorp distribution on releases.hashicorp.com"
      },
      {
        "key": "D",
        "text": "Plugins directory"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Dash1 month, 2 weeks ago\nSelected Answer: B\nB - Terraform providers are separate compiled executable binaries (written in Go). Terraform core interacts with these\nbinaries via RPC (Remote Procedure Call). It cannot dynamically execute or load raw provider source code directly.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 30,
    "number": 19,
    "topic": 2,
    "question": "You are creating a Terraform configuration which needs to make use of multiple providers, one for AWS and one\nfor Datadog.\nWhich provider blocks would allow you to do this?",
    "options": [
      {
        "key": "A",
        "text": "",
        "image": "assets/X88.png"
      },
      {
        "key": "B",
        "text": "",
        "image": "assets/X89.png"
      },
      {
        "key": "C",
        "text": "",
        "image": "assets/X90.png"
      },
      {
        "key": "D",
        "text": "",
        "image": "assets/X94.png"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 31,
    "number": 20,
    "topic": 2,
    "question": "You have developed a new service that runs on Azure and uses proprietary APIs. You want to use Terraform to\ncreate, manage, and delete users from the service.\nHow can Terraform interact with the service?",
    "options": [
      {
        "key": "A",
        "text": "Terraform can manage users for any service that is hosted on a public cloud provider."
      },
      {
        "key": "B",
        "text": "Terraform cannot use proprietary APIs."
      },
      {
        "key": "C",
        "text": "Develop and publish a custom provider to interact with the service using its proprietary\nAPIs."
      },
      {
        "key": "D",
        "text": "Use the azurerm provider to leverage existing resource types."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 32,
    "number": 1,
    "topic": 3,
    "question": "terraform init creates an example main.tf file in the current directory.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 33,
    "number": 2,
    "topic": 3,
    "question": "Which command must you run before you run a plan or apply for the first time?",
    "options": [
      {
        "key": "A",
        "text": "terraform validate"
      },
      {
        "key": "B",
        "text": "terraform workspace"
      },
      {
        "key": "C",
        "text": "terraform import"
      },
      {
        "key": "D",
        "text": "terraform init"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: D\nterraform init is the mandatory first command you must run in any new Terraform workspace (or after you add new\nproviders/modules). It does three critical things before plan or apply can succeed: Downloads and installs all providers\nreferenced in your *.tf files (populating the .terraform/providers/ cache). Downloads any child modules declared with\nmodule blocks. Initializes the backend (local by default) and creates the lock file .terraform.lock.hcl. Without it,\nterraform plan or terraform apply will immediately fail with an error",
    "votes": "Community vote distribution\nD (100%)",
    "images": []
  },
  {
    "id": 34,
    "number": 3,
    "topic": 3,
    "question": "As a developer, you want to ensure your plugins are up-to-date with the latest versions.\nWhich Terraform command should you use?",
    "options": [
      {
        "key": "A",
        "text": "terraform apply -upgrade"
      },
      {
        "key": "B",
        "text": "terraform providers -upgrade"
      },
      {
        "key": "C",
        "text": "terraform init -upgrade"
      },
      {
        "key": "D",
        "text": "terraform refresh -upgrade"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 35,
    "number": 4,
    "topic": 3,
    "question": "What does terraform apply change after you approve the execution plan? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "The state file"
      },
      {
        "key": "B",
        "text": "The cloud infrastructure"
      },
      {
        "key": "C",
        "text": "The execution plan"
      },
      {
        "key": "D",
        "text": "The Terraform code"
      },
      {
        "key": "E",
        "text": "The .terraform directory"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 36,
    "number": 5,
    "topic": 3,
    "question": "You modified your local Terraform configuration and ran terraform plan to review the changes. Simultaneously,\nyour teammate manually modified the infrastructure component you are working on.\nSince you already ran terraform plan locally, the execution plan for terraform apply will be the same.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: B\nB. False The execution plan that terraform apply generates (and then executes) will not be the same as the one you\nsaw from your earlier terraform plan. Why the plans differ Refresh happens again By default, both terraform plan and\nterraform apply perform a refresh before calculating the diff. This means Terraform queries the real infrastructure (via\nthe provider) to update the in-memory state with current values. Your teammate’s manual change = drift Between the\ntime you ran terraform plan and when you run terraform apply, the live resource has changed. The refresh during\napply will pick up that new reality, so the computed diff (what needs to be created/changed/destroyed) is now different.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 37,
    "number": 6,
    "topic": 3,
    "question": "Which is the correct workflow for deploying new infrastructure with Terraform?",
    "options": [
      {
        "key": "A",
        "text": "1. Write Terraform configuration.\n2. Run terraform apply to create infrastructure.\n3. Use terraform validate to confirm Terraform deployed resources correctly."
      },
      {
        "key": "B",
        "text": "1. Write Terraform configuration.\n2. Run terraform init to initialize the working directory or workspace.\n3. Run terraform apply."
      },
      {
        "key": "C",
        "text": "1. Write Terraform configuration.\n2. Run terraform plan to initialize the working directory or workspace.\n3. Run terraform apply to create the infrastructure."
      },
      {
        "key": "D",
        "text": "1. Write Terraform configuration.\n2. Run terraform show to view proposed changes.\n3. Run terraform apply to create new infrastructure."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 38,
    "number": 7,
    "topic": 3,
    "question": "After creating a new Terraform configuration, your config passes terraform validate but gives an “Access Denied”\nerror from the cloud provider when running terraform plan.\nWhy didn’t validate catch this issue?",
    "options": [
      {
        "key": "A",
        "text": "The working directory was not initialized, so the cloud provider plugin wasn’t available to use when\nrunning the terraform validate command."
      },
      {
        "key": "B",
        "text": "The remote backend wasn’t configured, so terraform validate couldn’t load the state and detect the\nmissing credentials."
      },
      {
        "key": "C",
        "text": "terraform validate only checks if a configuration is syntactically correct and internally consistent, and does\nnot communicate with providers."
      },
      {
        "key": "D",
        "text": "Variables are only applied and validated during a terraform plan, so validate assumed defaults and\nreturned the success message."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 39,
    "number": 8,
    "topic": 3,
    "question": "Only the user that generated a terraform plan may apply it.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 40,
    "number": 9,
    "topic": 3,
    "question": "terraform apply will fail if you have not run terraform plan first to update the plan output.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 41,
    "number": 10,
    "topic": 3,
    "question": "What’s the proper syntax for the plan command?",
    "options": [
      {
        "key": "A",
        "text": "terraform plan -generate-config-out=tfplan"
      },
      {
        "key": "B",
        "text": "terraform plan -target=tfplan"
      },
      {
        "key": "C",
        "text": "terraform plan -out=tfplan"
      },
      {
        "key": "D",
        "text": "terraform plan -var-file=tfplan"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 42,
    "number": 11,
    "topic": 3,
    "question": "Which is true about terraform apply? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "It only operates on infrastructure defined in the current working directory or workspace."
      },
      {
        "key": "B",
        "text": "You cannot target specific resources for the operation."
      },
      {
        "key": "C",
        "text": "Depending on provider specification, Terraform may need to destroy and recreate your infrastructure\nresources."
      },
      {
        "key": "D",
        "text": "You must pass the output of a terraform plan command to it."
      },
      {
        "key": "E",
        "text": "By default, it does not refresh your state file to reflect the current infrastructure configuration."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 43,
    "number": 12,
    "topic": 3,
    "question": "Which syntax check returns an error when you run terraform validate?",
    "options": [
      {
        "key": "A",
        "text": "None of these will return an error."
      },
      {
        "key": "B",
        "text": "There is a missing variable block."
      },
      {
        "key": "C",
        "text": "The state file does not match the current infrastructure."
      },
      {
        "key": "D",
        "text": "The code contains tabs for indentation instead of spaces."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Annuore1 month ago\nSelected Answer: B\nI tried it tf validate ╷  │ Error: Reference to undeclared input variable │ │ on main.tf line 42, in resource \"aws_instance\"\n\"tf_ec2\": │ 42: Name = var.ec2name │ │ An input variable with the name \"ec2name\" has not been declared. This\nvariable can be declared with a variable \"ec2name\" {} block.\nSrikantha4 months ago\nSelected Answer: B\nWhy \"B\" is the Answer If your code references a variable—for example, using var.instance_type—but you haven't\nactually defined that variable using a variable \"instance_type\" {} block, the configuration is considered incomplete.\nTerraform cannot proceed because it doesn't know the type or constraints of that reference, so validate will catch this\nand throw an error. Why the others are incorrect: C (State file mismatch): This is handled by terraform plan or\nterraform refresh. Validation doesn't look at the state file or your real-world resources at all. D (Tabs vs. Spaces):\nWhile the Terraform standard is two spaces, using tabs is not a syntax error. terraform fmt is the tool used to fix\nindentation, but validate won't fail because of it. A: Since B is a legitimate syntax/configuration error, A is incorrect.\nmarkbotros4 months ago\nSelected Answer: B\nHere’s why your explanation for A doesn’t hold up: terraform validate checks internal consistency, not just syntax. If\nyour configuration references a variable that is not declared anywhere, Terraform will raise an error during validation.\nWhile values can be provided at runtime (CLI, env vars, tfvars), the variable itself must still be declared with a variable\nblock.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 44,
    "number": 13,
    "topic": 3,
    "question": "What is the purpose of the .terraform directory in a Terraform workspace?",
    "options": [
      {
        "key": "A",
        "text": "The directory contains plugins and modules that Terraform downloads during initialization, along with\nother important information."
      },
      {
        "key": "B",
        "text": "The directory contains the provide credentials and the .tfvars files to prevent them from being committed\nto version control by accident."
      },
      {
        "key": "C",
        "text": "The directory is where Terraform creates and maintains the state file to track the underlying resources it\ncreates and manages."
      },
      {
        "key": "D",
        "text": "The directory is used to convert and store Terraform configuration files into API calls to communicate with\nthe targeted platform."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 45,
    "number": 14,
    "topic": 3,
    "question": "How can terraform plan aid in the development process?",
    "options": [
      {
        "key": "A",
        "text": "Validates your expectations against the execution plan without permanently modifying state."
      },
      {
        "key": "B",
        "text": "Reconciles Terraform’s state against deploys resources and permanently modifies state using the current\nstatus of deployed resources."
      },
      {
        "key": "C",
        "text": "Initializes your working directory containing your Terraform configuration files."
      },
      {
        "key": "D",
        "text": "Formats your Terraform configuration files."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 46,
    "number": 15,
    "topic": 3,
    "question": "You have a saved execution plan containing desired changes for infrastructure managed by Terraform. After\nrunning the command terraform apply my.tfplan, you receive the error shown in the Exhibit space on this page.\n| Error: Saved plan is stale\n|\n| The given plan file can no longer be applied because the state was changed by another operation after the\nplan was created.\nHow can you apply the desired changes? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Generate a new execution plan file with terraform plan, and apply the new plan."
      },
      {
        "key": "B",
        "text": "Run terraform apply without the saved execution plan."
      },
      {
        "key": "C",
        "text": "Refresh the current state data using the -refresh-only flag."
      },
      {
        "key": "D",
        "text": "Force the apply command by adding the flag -lock=false."
      },
      {
        "key": "E",
        "text": "Update the current plan file using the terraform state push command."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 47,
    "number": 16,
    "topic": 3,
    "question": "Which of these can you do with terraform plan? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Schedule Terraform to run at a planned time in the future."
      },
      {
        "key": "B",
        "text": "View the execution plan and check if the changes match your expectations."
      },
      {
        "key": "C",
        "text": "Execute a plan in a different workspace."
      },
      {
        "key": "D",
        "text": "Save a generated execution plan to apply later."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 48,
    "number": 17,
    "topic": 3,
    "question": "Which task does terraform init not perform?",
    "options": [
      {
        "key": "A",
        "text": "Sources any remote modules and downloads them."
      },
      {
        "key": "B",
        "text": "Connects to the configured backend."
      },
      {
        "key": "C",
        "text": "Validates that values are set for all required input variables."
      },
      {
        "key": "D",
        "text": "Sources all providers used in the configuration and downloads them."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 49,
    "number": 18,
    "topic": 3,
    "question": "terraform init retrieves and caches the configuration for all remote modules.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 50,
    "number": 19,
    "topic": 3,
    "question": "You just upgraded the version of a provider in an existing Terraform configuration. What will install the new\nprovider?",
    "options": [
      {
        "key": "A",
        "text": "Run terraform plan."
      },
      {
        "key": "B",
        "text": "Run terraform apply."
      },
      {
        "key": "C",
        "text": "Run terraform init -upgrade."
      },
      {
        "key": "D",
        "text": "Run terraform refresh."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 51,
    "number": 20,
    "topic": 3,
    "question": "terraform validate confirms the syntax of Terraform files.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 52,
    "number": 21,
    "topic": 3,
    "question": "A Terraform configuration is returning errors when running terraform plan.\nHow would you enable debug logging to investigate further?",
    "options": [
      {
        "key": "A",
        "text": "Rerun terraform plan with the correct flag."
      },
      {
        "key": "B",
        "text": "Edit the client configuration file."
      },
      {
        "key": "C",
        "text": "Update the backend configuration."
      },
      {
        "key": "D",
        "text": "Set the correct environment variable."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 53,
    "number": 22,
    "topic": 3,
    "question": "Why would you use the -replace flag for terraform apply?",
    "options": [
      {
        "key": "A",
        "text": "You want to force Terraform to destroy a resource on the next apply."
      },
      {
        "key": "B",
        "text": "You want Terraform to ignore a resource on the next apply."
      },
      {
        "key": "C",
        "text": "You want Terraform to destroy all the infrastructure in your workspace."
      },
      {
        "key": "D",
        "text": "You want to force Terraform to destroy and recreate a resource on the next apply."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 54,
    "number": 23,
    "topic": 3,
    "question": "How does Terraform determine dependencies between resources when it creates an execution plan?",
    "options": [
      {
        "key": "A",
        "text": "Terraform builds a resource graph based on your configuration and your state file (if\npresent)."
      },
      {
        "key": "B",
        "text": "Terraform requires resources in your configuration be listed in the order they will be created to determine\ndependencies."
      },
      {
        "key": "C",
        "text": "Terraform requires all dependencies between resources be specified using the depends_on parameter."
      },
      {
        "key": "D",
        "text": "Terraform requires resource dependencies be defined as modules and sourced in order."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 55,
    "number": 24,
    "topic": 3,
    "question": "You create a main.tf Terraform configuration consisting of an application server, a database, and a load\nbalancer. You run terraform apply and Terraform created all the resources successfully.\nNow you realize that you do not actually need the load balancer, so you run terraform destroy without any flags.\nWhat will happen?",
    "options": [
      {
        "key": "A",
        "text": "Terraform will prompt you to confirm that you want to destroy all the infrastructure."
      },
      {
        "key": "B",
        "text": "Terraform will prompt you to pick which resource you want to destroy."
      },
      {
        "key": "C",
        "text": "Terraform will immediately destroy all the infrastructure."
      },
      {
        "key": "D",
        "text": "Terraform will destroy the application server because it is listed first in the code."
      },
      {
        "key": "E",
        "text": "Terraform will destroy the main.tf file."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 56,
    "number": 25,
    "topic": 3,
    "question": "You developed a new Terraform configuration for two virtual machines with a cloud provider. You’re ready to\ncreate the infrastructure for the first time.\nWhich Terraform command should you run first?",
    "options": [
      {
        "key": "A",
        "text": "terraform apply"
      },
      {
        "key": "B",
        "text": "terraform plan"
      },
      {
        "key": "C",
        "text": "terraform init"
      },
      {
        "key": "D",
        "text": "terraform show"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 57,
    "number": 26,
    "topic": 3,
    "question": "When should you run terraform init?",
    "options": [
      {
        "key": "A",
        "text": "After you start coding a new Terraform project, and before you run terraform plan for the first\ntime."
      },
      {
        "key": "B",
        "text": "Every time you run terraform apply."
      },
      {
        "key": "C",
        "text": "Before you start coding a new Terraform project."
      },
      {
        "key": "D",
        "text": "After you run terraform plan for the first time in a new Terraform project, and before you run terraform\napply."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 58,
    "number": 27,
    "topic": 3,
    "question": "Which configuration consistency error does terraform validate report?",
    "options": [
      {
        "key": "A",
        "text": "Declaring a resource identifier more than once."
      },
      {
        "key": "B",
        "text": "Differences between local and remote state."
      },
      {
        "key": "C",
        "text": "An out-of-date module."
      },
      {
        "key": "D",
        "text": "A mix of spaces and tabs in configuration files."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 59,
    "number": 28,
    "topic": 3,
    "question": "Which Terraform command checks that your configuration syntax is correct?",
    "options": [
      {
        "key": "A",
        "text": "terraform init"
      },
      {
        "key": "B",
        "text": "terraform show"
      },
      {
        "key": "C",
        "text": "terraform fmt"
      },
      {
        "key": "D",
        "text": "terraform validate"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 60,
    "number": 29,
    "topic": 3,
    "question": "Which of the following is not an action performed by terraform init?",
    "options": [
      {
        "key": "A",
        "text": "Create template configuration files."
      },
      {
        "key": "B",
        "text": "Retrieve the source code for all referenced modules."
      },
      {
        "key": "C",
        "text": "Initialize a configured backend."
      },
      {
        "key": "D",
        "text": "Load required provider plugins."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 61,
    "number": 1,
    "topic": 4,
    "question": "Which of the following arguments are required when declaring a Terraform output?",
    "options": [
      {
        "key": "A",
        "text": "default"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "description"
      },
      {
        "key": "D",
        "text": "sensitive"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 62,
    "number": 2,
    "topic": 4,
    "question": "Outside of the required_providers block, Terraform configurations always refer to providers by their local names.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: A\nA. True In Terraform, the required_providers block (inside the terraform {} block) is the only place where you ever\nreference a provider by its full source address and version constraint. Example: hclterraform { required_providers {\naws = { source = \"hashicorp/aws\" version = \"~> 5.0\" } } } Everywhere else in the configuration — resource blocks,\ndata sources, provider configuration blocks, provider meta-arguments, modules, etc. — Terraform uses only the local\nname (the key from required_providers, which defaults to the provider type if the block is omitted)\nAZJunkie5 months, 1 week ago\nSelected Answer: B\nTerraform may use: The default provider name, or An alias, if you configured one.\nhttps://developer.hashicorp.com/terraform/language/block/provider\nSrikantha4 months ago\nAlias is used when you need to define multiple provider blocks for the same provider",
    "votes": "Community vote distribution\nA (67%) B (33%)",
    "images": []
  },
  {
    "id": 63,
    "number": 3,
    "topic": 4,
    "question": "The Exhibit section of this page shows part of a configuration you’ve been asked to update. data\n“azurerm_resource_group” “example” { name = var.resource_group_name\n}\nresource “azurerm_virtual_network” “example” {\nname = ____________________\n}\nThe name of the Azure Virtual Network should be set to the name of the resource group followed by a dash and\nthe word “vnet”.\nWhich expression fulfills this requirement?",
    "options": [
      {
        "key": "A",
        "text": "“${azurerm_resource_group.example.name}-vnet”"
      },
      {
        "key": "B",
        "text": "join(“-”,var.resource_group_name,“vnet”)"
      },
      {
        "key": "C",
        "text": "concat(data.azurerm_resource_group.example.name, “-”, “vnet”)"
      },
      {
        "key": "D",
        "text": "“${data.azurerm_resource_group.example.name}-vnet”"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 64,
    "number": 4,
    "topic": 4,
    "question": "Your team is collaborating on infrastructure using Terraform and are formatting their code to follow Terraform\nlanguage style conventions.\nHow can you update your code to meet these requirements?",
    "options": [
      {
        "key": "A",
        "text": "Run terraform validate prior to executing terraform plan or terraform apply."
      },
      {
        "key": "B",
        "text": "Replace all tabs with spaces within your Terraform configuration files."
      },
      {
        "key": "C",
        "text": "Terraform automatically formats configuration on terraform apply."
      },
      {
        "key": "D",
        "text": "Run terraform fmt to update your Terraform configurations."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 65,
    "number": 5,
    "topic": 4,
    "question": "A resource block is shown in the Exhibit space of this page.\nresource “aws_instance” “web” {\ncount = 2\nname = “terraform-${count.index}”\n}\nHow do you reference the name value of the second instance of this resource?",
    "options": [
      {
        "key": "A",
        "text": "aws_instance.web.*.name"
      },
      {
        "key": "B",
        "text": "aws_instance.web[2].name"
      },
      {
        "key": "C",
        "text": "element(aws_instance.web, 2)"
      },
      {
        "key": "D",
        "text": "aws_instance.web[1].name"
      },
      {
        "key": "E",
        "text": "aws_instance.web[1]"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 66,
    "number": 6,
    "topic": 4,
    "question": "When using multiple configurations of the same Terraform provider, what meta-argument must you include in\nany non-default provider configurations?",
    "options": [
      {
        "key": "A",
        "text": "alias"
      },
      {
        "key": "B",
        "text": "name"
      },
      {
        "key": "C",
        "text": "depends_on"
      },
      {
        "key": "D",
        "text": "id"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 67,
    "number": 7,
    "topic": 4,
    "question": "You want to create a string that is a combination of a generated random_id and a variable and reuse that string\nseveral times in your configuration.\nWhat is the simplest correct way to implement this without repeating the random_id and variable?",
    "options": [
      {
        "key": "A",
        "text": "Add an output value."
      },
      {
        "key": "B",
        "text": "Add a local value."
      },
      {
        "key": "C",
        "text": "Use a data source."
      },
      {
        "key": "D",
        "text": "Use a module."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 68,
    "number": 8,
    "topic": 4,
    "question": "Your Terraform configuration manages a resource that requires maximum uptime. You need to update the\nresource, and when you run terraform plan, Terraform notes that the update requires the resource to be\ndestroyed and recreated.\nWhich lifecycle rule can you add to the resource to reduce the downtime of the resource while still applying the\nupdate?",
    "options": [
      {
        "key": "A",
        "text": "prevent_destroy = true"
      },
      {
        "key": "B",
        "text": "destroy = false"
      },
      {
        "key": "C",
        "text": "create_before_destroy = true"
      },
      {
        "key": "D",
        "text": "ignore_changes = all"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 69,
    "number": 9,
    "topic": 4,
    "question": "The Terraform configuration shown in the Exhibit space on this page will create a new AWS instance. data\n“aws_instance” “web” { filter { name = “tag:Name” values = [“web”]\n}\n}",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 70,
    "number": 10,
    "topic": 4,
    "question": "What kind of configuration block will manage an infrastructure object with settings specified within the block?",
    "options": [
      {
        "key": "A",
        "text": "data"
      },
      {
        "key": "B",
        "text": "locals"
      },
      {
        "key": "C",
        "text": "provider"
      },
      {
        "key": "D",
        "text": "resource"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 71,
    "number": 11,
    "topic": 4,
    "question": "You can execute terraform fmt to standardize all Terraform configurations within the current working directory to\nTerraform’s canonical format and style.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 72,
    "number": 12,
    "topic": 4,
    "question": "A data source is shown in the Exhibit space of this page.\ndata “aws_ami” “web” {\nmost_recent = true\nowners = [“self”]\ntags = {\nName = “web-server”\n}\n}\nHow do you reference the id attribute of this data source?",
    "options": [
      {
        "key": "A",
        "text": "data.aws_ami.web.id"
      },
      {
        "key": "B",
        "text": "web.id"
      },
      {
        "key": "C",
        "text": "aws_ami.web.id"
      },
      {
        "key": "D",
        "text": "data.web.id"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 73,
    "number": 13,
    "topic": 4,
    "question": "A resource block is shown in the Exhibit space of this page.\nresource “kubernetes_namespace” “example” {\nname = “test”\n}\nHow would you reference the attribute name of this resource in HCL?",
    "options": [
      {
        "key": "A",
        "text": "resource.kubernetes_namespace.example.name"
      },
      {
        "key": "B",
        "text": "data.kubernetes_namespace.name"
      },
      {
        "key": "C",
        "text": "kubernetes_namespace.example.name"
      },
      {
        "key": "D",
        "text": "kubernetes_namespace.test.name"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 74,
    "number": 14,
    "topic": 4,
    "question": "You need to deploy resources into two different regions in the same Terraform configuration using the block in\nthe Exhibit space on this page. provider “aws” { region = “us-east-1”\n}\nprovider “aws” {\nregion = “us-west-2”\n}\nWhat do you need to add to the provider configuration to deploy the resource to the us-west-2 AWS region?",
    "options": [
      {
        "key": "A",
        "text": "resource “aws_instance” “example-us-west-2” {\nami = data.aws_ami.ubuntu.id\ninstance_type = “t3.micro”\n}"
      },
      {
        "key": "B",
        "text": "provider “aws” {\nregion = “us-east-1”\n}\nprovider “aws” “west” {\nregion = “us-west-2”\n}"
      },
      {
        "key": "C",
        "text": "provider “aws_west” {\nregion = “us-west-2”\n}"
      },
      {
        "key": "D",
        "text": "provider “aws” {\nregion = “us-east-1”\n}\nprovider “aws” {\nalias = “west”\nregion = “us-west-2”\n}"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 75,
    "number": 15,
    "topic": 4,
    "question": "Two resources blocks are shown in the Exhibit space on this page: azurerm_linux_web_app, and\nazurerm_role_assignment. When provisioned, the web app will use the role assignment during creation, so the\nrole assignment must be created first.\nHow do you ensure the azurerm_role_assignment resource is created first?",
    "options": [
      {
        "key": "A",
        "text": "Add a depends_on argument to the azurerm_linux_web_app."
      },
      {
        "key": "B",
        "text": "Change the order of the azurerm_linux_web_app and azurerm_role_assignment blocks."
      },
      {
        "key": "C",
        "text": "Add a create_before_destroy argument to the azurerm_role_assignment."
      },
      {
        "key": "D",
        "text": "Add a count argument to both resources."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": [
      "assets/X200.png",
      "assets/X201.png"
    ]
  },
  {
    "id": 76,
    "number": 16,
    "topic": 4,
    "question": "A Terraform local value can reference other Terraform local values.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 77,
    "number": 17,
    "topic": 4,
    "question": "You want to define multiple data disks as nested blocks inside the resource block for a virtual machine.\nWhat Terraform feature would help you define the blocks using the values in a variable?",
    "options": [
      {
        "key": "A",
        "text": "Count arguments"
      },
      {
        "key": "B",
        "text": "Collection functions"
      },
      {
        "key": "C",
        "text": "Local values"
      },
      {
        "key": "D",
        "text": "Dynamic blocks"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: D\nD. Dynamic blocks Dynamic blocks are the exact Terraform feature designed for this use case: they let you generate\nrepeating nested blocks (such as multiple data_disk, storage_data_disk, attached_disk, etc.) inside a single resource\nbased on the contents of a variable.",
    "votes": "Community vote distribution\nD (100%)",
    "images": []
  },
  {
    "id": 78,
    "number": 18,
    "topic": 4,
    "question": "You are creating a reusable Terraform configuration and want to include an optional billing_dept tag so your\nFinance team can track team-specific spending on resources.\nWhich of the following billing_dept variable declarations will achieve this?",
    "options": [
      {
        "key": "A",
        "text": "variable “billing_dept” {\ndefault = “”\n}"
      },
      {
        "key": "B",
        "text": "variable “billing_dept” {\ntype = optional(string)\n}"
      },
      {
        "key": "C",
        "text": "variable “billing_dept” {\noptional = true\n}"
      },
      {
        "key": "D",
        "text": "variable “billing_dept” {\ntype = default\n}"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "Grandslam3 weeks, 5 days ago\nSelected Answer: A\nB is invalid: The optional() modifier can only be used inside complex type constraints like object() or tuple(). It cannot\nbe used as the top-level type for a standard variable.\ngpfs1 month ago\nSelected Answer: B\nA is wrong as terraform always add a value of \"\" every time. Correct is B as type = optional(string) means the variable\ntype is string, but the variable itself is optional, thus the caller can omit it. If you don't set the billing_dept the variable\nhas a \"null\" value. If you do set it, terraform expects a string value.",
    "votes": "Community vote distribution\nA (50%) B (50%)",
    "images": []
  },
  {
    "id": 79,
    "number": 19,
    "topic": 4,
    "question": "Part of a configuration is shown in the Exhibit space of this page. data “vsphere_datacenter” “dc” {} resource\n“vsphere_folder” “parent” { path = “Production” type = “vm” datacenter_id = ____________________\n}\nYou want to pass the id of the vsphere_datacenter data source to the datacenter_id argument of the\nvsphere_folder resource.\nWhich reference would you use?",
    "options": [
      {
        "key": "A",
        "text": "data.vsphere_datacenter.dc"
      },
      {
        "key": "B",
        "text": "data.vsphere_datacenter.dc.id"
      },
      {
        "key": "C",
        "text": "vsphere_datacenter.dc.id"
      },
      {
        "key": "D",
        "text": "data.dc.id"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 80,
    "number": 20,
    "topic": 4,
    "question": "Your Terraform configuration declares a variable, you want to enforce that its value meets your specific\nrequirements, and you want to block the Terraform operation if it does not.\nWhat should you add to your configuration?",
    "options": [
      {
        "key": "A",
        "text": "Add a top-level check block."
      },
      {
        "key": "B",
        "text": "Add a validation block to the variable block."
      },
      {
        "key": "C",
        "text": "Add a top-level validation block."
      },
      {
        "key": "D",
        "text": "Add a check block to the variable block."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 81,
    "number": 21,
    "topic": 4,
    "question": "Running terraform fmt without any flags in a directory with Terraform configuration files will check the formatting\nof those files, but will never change them.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 82,
    "number": 22,
    "topic": 4,
    "question": "You want to retrieve the ID of an existing cloud resource for use in your Terraform configuration.\nWhich block type would you use?",
    "options": [
      {
        "key": "A",
        "text": "resource"
      },
      {
        "key": "B",
        "text": "import"
      },
      {
        "key": "C",
        "text": "data"
      },
      {
        "key": "D",
        "text": "output"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 83,
    "number": 23,
    "topic": 4,
    "question": "Which of these commands makes your code more human-readable?",
    "options": [
      {
        "key": "A",
        "text": "terraform show"
      },
      {
        "key": "B",
        "text": "terraform fmt"
      },
      {
        "key": "C",
        "text": "terraform output"
      },
      {
        "key": "D",
        "text": "terraform validate"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 84,
    "number": 24,
    "topic": 4,
    "question": "You want to split a large main.tf file into multiple files for better organization within the same working directory.\nWhat impact should you expect when you run a terraform plan?",
    "options": [
      {
        "key": "A",
        "text": "The terraform plan will fail since variable and provider blocks must appear before resource blocks."
      },
      {
        "key": "B",
        "text": "Significant changes should be expected since moving resources between files can trigger a\ndestroy/replacement."
      },
      {
        "key": "C",
        "text": "No impact since Terraform reads all .tf files as a single configuration when executing a terraform\nplan."
      },
      {
        "key": "D",
        "text": "Only minor impacts since Terraform parses the main.tf file first, which could change the order in which\nresources are created."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 85,
    "number": 25,
    "topic": 4,
    "question": "You need to deploy resources into two different regions in the same Terraform configuration. To do this, you\ndeclare multiple provider configurations as shown in the Exhibit space on this page.\nprovider “aws” {\nregion = “us-east-1”\n}\nprovider “aws” {\nalias = “west”\nregion = “us-west-2”\n}\nWhat meta-argument do you need to configure in a resource block to deploy the resource to the us-west-2 AWS\nregion?",
    "options": [
      {
        "key": "A",
        "text": "provider = west"
      },
      {
        "key": "B",
        "text": "provider = aws.west"
      },
      {
        "key": "C",
        "text": "alias = aws.west"
      },
      {
        "key": "D",
        "text": "alias = west"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 86,
    "number": 26,
    "topic": 4,
    "question": "A resource block is shown in the Exhibit space on this page.\nresource “google_compute_instance” “main” {\nname = “test”\n}\nWhat is the Terraform resource name of the resource block?",
    "options": [
      {
        "key": "A",
        "text": "test"
      },
      {
        "key": "B",
        "text": "compute_instance"
      },
      {
        "key": "C",
        "text": "google"
      },
      {
        "key": "D",
        "text": "main"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 87,
    "number": 27,
    "topic": 4,
    "question": "A variable declaration is shown in the Exhibit space on this page.\nvariable “sizes” {\ntype = list(string)\ndescription = “Valid server sizes”\ndefault = [“small”, “medium”, “large”]\n}\nWhich is the correct way to get the value of medium from this variable?",
    "options": [
      {
        "key": "A",
        "text": "var.sizes[0]"
      },
      {
        "key": "B",
        "text": "var.sizes[1]"
      },
      {
        "key": "C",
        "text": "var.sizes[2]"
      },
      {
        "key": "D",
        "text": "var.sizes[3]"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 88,
    "number": 28,
    "topic": 4,
    "question": "You have declared a variable called var.list, which is a list of objects that all have an attribute id.\nWhich expressions will evaluate to a list of the objectives’ id attributes? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "[ var.list[*].id ]"
      },
      {
        "key": "B",
        "text": "[ for o in var.list : o.id ]"
      },
      {
        "key": "C",
        "text": "var.list[*].id"
      },
      {
        "key": "D",
        "text": "{ for o in var.list : o => o.id }"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 89,
    "number": 29,
    "topic": 4,
    "question": "What type of block is used to construct a collection of nested configuration blocks?",
    "options": [
      {
        "key": "A",
        "text": "dynamic"
      },
      {
        "key": "B",
        "text": "nesting"
      },
      {
        "key": "C",
        "text": "for_each"
      },
      {
        "key": "D",
        "text": "repeated"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 90,
    "number": 30,
    "topic": 4,
    "question": "Which type of block fetches information from outside of Terraform, or computes data for use in a Terraform\nconfiguration?",
    "options": [
      {
        "key": "A",
        "text": "resource"
      },
      {
        "key": "B",
        "text": "provider"
      },
      {
        "key": "C",
        "text": "data"
      },
      {
        "key": "D",
        "text": "output"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 91,
    "number": 31,
    "topic": 4,
    "question": "Which option does not keep secret variable values out of Terraform configuration files?",
    "options": [
      {
        "key": "A",
        "text": "Pass the secret values as environment variables."
      },
      {
        "key": "B",
        "text": "Configure the variable as sensitive."
      },
      {
        "key": "C",
        "text": "Pass the secret values via a -var flag."
      },
      {
        "key": "D",
        "text": "Store the secrets in a shared credential file."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 92,
    "number": 32,
    "topic": 4,
    "question": "Which statements are true? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "When a resource has a count meta-argument, Terraform evaluates the precondition for each\ninstance."
      },
      {
        "key": "B",
        "text": "A precondition in a resource block must pass for Terraform to create the resource."
      },
      {
        "key": "C",
        "text": "A precondition cannot reference attributes of another resource that are only known after apply."
      },
      {
        "key": "D",
        "text": "A resource can either have a precondition or a postcondition. block, but not both."
      },
      {
        "key": "E",
        "text": "If a resource’s postcondition block fails, Terraform still creates the resources that depend on it."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 93,
    "number": 1,
    "topic": 5,
    "question": "Your configuration contains a module block that references a module from the Terraform registry, and sets the\nversion argument to 1.0. You just published a new version of the module and updated your configuration to point\nto version 1.1.\nWhich command must be run to install the new version?",
    "options": [
      {
        "key": "A",
        "text": "terraform apply"
      },
      {
        "key": "B",
        "text": "terraform init"
      },
      {
        "key": "C",
        "text": "terraform plan"
      },
      {
        "key": "D",
        "text": "terraform modules"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 94,
    "number": 2,
    "topic": 5,
    "question": "If one of your modules uses a local value, you can expose that value to callers of the module by defining a\nterraform output in the module’s configuration.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 95,
    "number": 3,
    "topic": 5,
    "question": "If a module declares a variable without a default value, you must pass the value of the variable within the\nmodule block when you call the module in your configuration.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 96,
    "number": 4,
    "topic": 5,
    "question": "When you run terraform apply, the Terraform CLI will print output values from both the root module and any child\nmodules.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: B\nWhen you run terraform apply, the Terraform CLI only prints the output values defined in the root module. Outputs\nfrom child modules are not automatically displayed.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 97,
    "number": 5,
    "topic": 5,
    "question": "Which type of information does the Terraform Registry provide about the modules it hosts?",
    "options": [
      {
        "key": "A",
        "text": "Required input variables"
      },
      {
        "key": "B",
        "text": "Outputs"
      },
      {
        "key": "C",
        "text": "Optional input variables and default values"
      },
      {
        "key": "D",
        "text": "All of these are provided"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 98,
    "number": 6,
    "topic": 5,
    "question": "When you include a module block in your configuration that references a module from the Terraform Registry,\nthe version attribute is required.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 99,
    "number": 7,
    "topic": 5,
    "question": "A child module can always access variables declared in its parent module.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 100,
    "number": 8,
    "topic": 5,
    "question": "You are updating a child module with the resource block shown in the Exhibit space on this page. The public_ip\nattribute of the resource needs to be accessible to the parent module. resource “aws_instance” “example” { ami\n= “ami-0a123456789abcdef” instance_type = “t3.micro”\n}\nHow do you meet this requirement?",
    "options": [
      {
        "key": "A",
        "text": "Add a data source to the parent module."
      },
      {
        "key": "B",
        "text": "Create a local value in the child module."
      },
      {
        "key": "C",
        "text": "Add an import block to the parent module."
      },
      {
        "key": "D",
        "text": "Create an output in the child module."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 101,
    "number": 9,
    "topic": 5,
    "question": "Your configuration defines the module block shown in the Exhibit space on this page. The web_stack module\naccepts an input variable named servers. module “web_stack” { source = “./modules/web_stack”\n}\nWhich of the following changes to the module block sets the servers variable to the value of “3”?",
    "options": [
      {
        "key": "A",
        "text": "module “web_stack” {\nsource = “./modules/web_stack”\nservers = 3\n}"
      },
      {
        "key": "B",
        "text": "module “web_stack” {\nsource = “./modules/web_stack”\ninputs.servers = 3\n}"
      },
      {
        "key": "C",
        "text": "module “web_stack” {\nsource = “./modules/web_stack”\ninputs = {\nservers = 3\n}"
      },
      {
        "key": "D",
        "text": "module “web_stack” {\nsource = “./modules/web_stack”\nvar.servers = 3\n}"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 102,
    "number": 10,
    "topic": 5,
    "question": "Your team is using a version 3.1.4 of a module from the public Terraform Registry, and they’re worried about\npossible breaking changes in future versions of the module.\nWhich version argument should you add to the module block to prevent newer versions from being used?",
    "options": [
      {
        "key": "A",
        "text": "version = “3.1.4”"
      },
      {
        "key": "B",
        "text": "version = “< 3.2”"
      },
      {
        "key": "C",
        "text": "version = “!=3.1.5”"
      },
      {
        "key": "D",
        "text": "version = “~>3.1.4”"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "Grandslam3 weeks, 5 days ago\nSelected Answer: A\nD. version = \"~>3.1.4\" (Incorrect but important): This uses the pessimistic constraint operator. It tells Terraform to\nallow patch updates but prevent minor updates. It would allow newer versions like 3.1.5 or 3.1.9 but prevent 3.2.0.\nWhile this is a common best practice for allowing safe updates, it is incorrect here because it still allows newer\nversions to be used, which the scenario explicitly wants to prevent.\nFlacoX3 weeks, 4 days ago\nThe question isn't really asking to prevent every newer version. It's asking which version constraint prevents newer\nversions that could introduce breaking changes.",
    "votes": "Community vote distribution\nA (100%)",
    "images": []
  },
  {
    "id": 103,
    "number": 11,
    "topic": 5,
    "question": "Which of the following locations can Terraform use as a private source for modules? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Public repository on GitHub."
      },
      {
        "key": "B",
        "text": "Internally hosted VCS (Version Control System) platform."
      },
      {
        "key": "C",
        "text": "Public Terraform Registry."
      },
      {
        "key": "D",
        "text": "Private repository on GitHub."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 104,
    "number": 12,
    "topic": 5,
    "question": "Your configuration defines the module block shown in the Exhibit space on this page.\nThis module declares an output named hostnames.\nHow do you access the value of this output?",
    "options": [
      {
        "key": "A",
        "text": "production.hostnames"
      },
      {
        "key": "B",
        "text": "module.production.hostnames"
      },
      {
        "key": "C",
        "text": "web_stack.hostnames"
      },
      {
        "key": "D",
        "text": "module.web_stack.hostnames"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": [
      "assets/X66.png"
    ]
  },
  {
    "id": 105,
    "number": 13,
    "topic": 5,
    "question": "Which argument can you set on a module block to prevent Terraform from updating the module’s configuration\nduring an init or get operation?",
    "options": [
      {
        "key": "A",
        "text": "count"
      },
      {
        "key": "B",
        "text": "lifecycle"
      },
      {
        "key": "C",
        "text": "source"
      },
      {
        "key": "D",
        "text": "version"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 106,
    "number": 14,
    "topic": 5,
    "question": "You are writing Terraform configuration that calls a child module. This child module declares an output value.\nHow can you ensure that Terraform will print out this value when you run Terraform CLI commands such as\nterraform apply?",
    "options": [
      {
        "key": "A",
        "text": "Nothing. Terraform will automatically print out all output values from child modules."
      },
      {
        "key": "B",
        "text": "Nothing. Terraform cannot use output values from child modules."
      },
      {
        "key": "C",
        "text": "Declare a new output in your root configuration that references the module’s output."
      },
      {
        "key": "D",
        "text": "None of these will print the value."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 107,
    "number": 15,
    "topic": 5,
    "question": "All modules published on the official Terraform Registry are maintained and tested by HashiCorp.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 108,
    "number": 16,
    "topic": 5,
    "question": "You root module contains a variable named num_servers.\nWhich is the correct way to pass its value to a child module with an input named servers?",
    "options": [
      {
        "key": "A",
        "text": "servers = var(num_servers)"
      },
      {
        "key": "B",
        "text": "servers = num_servers"
      },
      {
        "key": "C",
        "text": "${var.num_servers}"
      },
      {
        "key": "D",
        "text": "servers = var.num_servers"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 109,
    "number": 17,
    "topic": 5,
    "question": "You’re using a module block to reference a module from the Terraform Registry.\nHow do you specify version 1.0.0 of the module?",
    "options": [
      {
        "key": "A",
        "text": "Add a version = “1.0.0” argument to the module block."
      },
      {
        "key": "B",
        "text": "Nothing. Modules stored on the public Terraform module Registry always default to version 1.0.0."
      },
      {
        "key": "C",
        "text": "You cannot. Modules stored on the public Terraform Registry do not support versioning."
      },
      {
        "key": "D",
        "text": "Append a ?ref=v1.0.0 argument to the source path."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 110,
    "number": 1,
    "topic": 6,
    "question": "You need to destroy all of the resources in your Terraform workspace, except for aws_instance.ubuntu[1], which\nyou want to keep.\nHow can you tell Terraform to stop managing that specific resource without destroying it?",
    "options": [
      {
        "key": "A",
        "text": "Change the value of the count argument on the resource."
      },
      {
        "key": "B",
        "text": "Remove the resource block from your configuration."
      },
      {
        "key": "C",
        "text": "Run terraform state rm aws_instance.ubuntu[1]."
      },
      {
        "key": "D",
        "text": "Use a moved block."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 111,
    "number": 2,
    "topic": 6,
    "question": "When you run terraform apply -refresh-only, which of the following is not consulted by Terraform to update the\nstate file?",
    "options": [
      {
        "key": "A",
        "text": "Authentication credentials for the provider."
      },
      {
        "key": "B",
        "text": "Terraform configuration files defining the resources."
      },
      {
        "key": "C",
        "text": "The actual infrastructure as reported by the provider API."
      },
      {
        "key": "D",
        "text": "The most recent state file."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 112,
    "number": 3,
    "topic": 6,
    "question": "When declaring a variable, setting the sensitive argument to true will prevent the value from being stored in the\nstate file.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 113,
    "number": 4,
    "topic": 6,
    "question": "Which are benefits of migrating from a local state backend to a remote backend? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Eliminates the need to manage credentials when deploying infrastructure to multiple cloud providers."
      },
      {
        "key": "B",
        "text": "State locking that allows multiple team members to safely work on the same infrastructure."
      },
      {
        "key": "C",
        "text": "Faster plans and apply execution because the state is cached locally on the cloud provider."
      },
      {
        "key": "D",
        "text": "Guarantees that configuration drift cannot occur for the managed infrastructure."
      },
      {
        "key": "E",
        "text": "The ability to enable server-side encryption at rest."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 114,
    "number": 5,
    "topic": 6,
    "question": "How can you configure a Terraform workspace to store its state remotely? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Add a cloud block inside the terraform block."
      },
      {
        "key": "B",
        "text": "Set the TERRAFORM_BACKEND environment variable."
      },
      {
        "key": "C",
        "text": "Add a backend block inside the terraform block."
      },
      {
        "key": "D",
        "text": "Set the TERRAFORM_CLOUD environment variable."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 115,
    "number": 6,
    "topic": 6,
    "question": "What does state locking accomplish?",
    "options": [
      {
        "key": "A",
        "text": "Sets a password on the state file."
      },
      {
        "key": "B",
        "text": "Blocks Terraform commands from modifying the state file."
      },
      {
        "key": "C",
        "text": "Encrypts any credentials stored within the state file."
      },
      {
        "key": "D",
        "text": "Prevents accidental deletion of the state file."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 116,
    "number": 7,
    "topic": 6,
    "question": "Why is it considered important to treat your Terraform state file as sensitive?",
    "options": [
      {
        "key": "A",
        "text": "It contains personal information about the last user to update it."
      },
      {
        "key": "B",
        "text": "It can contain information such as resource passwords and keys."
      },
      {
        "key": "C",
        "text": "It can be manually edited to change the deployed resources."
      },
      {
        "key": "D",
        "text": "It stores all environment variables from the machine that created it."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 117,
    "number": 8,
    "topic": 6,
    "question": "Terraform stores the value of an output in its state file, even if the sensitive argument is set to true.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 118,
    "number": 9,
    "topic": 6,
    "question": "You provisioned virtual machines (VMs) on Google Cloud Platform using the gcloud command line tool.\nWhat must be done to manage these VMs using Terraform instead? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Add an import block to the configuration."
      },
      {
        "key": "B",
        "text": "Run terraform apply -refresh-only."
      },
      {
        "key": "C",
        "text": "Add a resource block for the existing VM."
      },
      {
        "key": "D",
        "text": "Run terraform state pull."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 119,
    "number": 10,
    "topic": 6,
    "question": "Which is a recommended way to share Terraform state across teams?",
    "options": [
      {
        "key": "A",
        "text": "Use a remote state backend."
      },
      {
        "key": "B",
        "text": "Store terraform.tfstate state in HashiCorp Vault."
      },
      {
        "key": "C",
        "text": "No additional configuration is recommended."
      },
      {
        "key": "D",
        "text": "Store terraform.tfstate state in version control."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 120,
    "number": 11,
    "topic": 6,
    "question": "Once you configure a new Terraform backend with a terraform code block, which command should you use to\nmigrate the state file?",
    "options": [
      {
        "key": "A",
        "text": "terraform init"
      },
      {
        "key": "B",
        "text": "terraform state rm"
      },
      {
        "key": "C",
        "text": "terraform push"
      },
      {
        "key": "D",
        "text": "terraform apply"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 121,
    "number": 12,
    "topic": 6,
    "question": "You want to bring in an existing database under Terraform management.\nWhat information is required to create a new import block for the database? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "The connection string that Terraform will use to connect and manage the database."
      },
      {
        "key": "B",
        "text": "The ID associated with the current database on the cloud provider."
      },
      {
        "key": "C",
        "text": "The database platform and version that is the existing resource is running."
      },
      {
        "key": "D",
        "text": "The path to the .tf file that contains the database resource block."
      },
      {
        "key": "E",
        "text": "The destination resource address of the block that will manage the database."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 122,
    "number": 13,
    "topic": 6,
    "question": "Terraform encrypts sensitive values stored in your state file.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 123,
    "number": 14,
    "topic": 6,
    "question": "You’ve just finished refactoring part of your Terraform workspace’s configuration to use a module to manage\nsome of your resources. When you plan your changes, you notice that Terraform will destroy and recreate the\naffected resources. Doing so could cause unintended downtime in the application your workspace manages.\nWhat supported approach should you take to complete the refactor without destroying and recreating your\nresources?",
    "options": [
      {
        "key": "A",
        "text": "Add moved blocks to your configuration to let Terraform know the new resource addresses for the\naffected resources."
      },
      {
        "key": "B",
        "text": "Open your cloud provider’s console and rename the effected resources."
      },
      {
        "key": "C",
        "text": "Run the terraform console command to edit your workspace’s state and update the resource names."
      },
      {
        "key": "D",
        "text": "Manually edit your terraform.tfstate file and update the resource names."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 124,
    "number": 15,
    "topic": 6,
    "question": "What is the purpose of state locking in a remote backend?",
    "options": [
      {
        "key": "A",
        "text": "Ensures only one instance of Terraform can modify state at a time."
      },
      {
        "key": "B",
        "text": "Creates a backup of the state file in a secure location."
      },
      {
        "key": "C",
        "text": "Encrypts the state in the remote backend."
      },
      {
        "key": "D",
        "text": "Requires every instance of Terraform uses the same provider version."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 125,
    "number": 16,
    "topic": 6,
    "question": "What Terraform command always causes a state file to be updated with changes that might have been made\noutside of Terraform?",
    "options": [
      {
        "key": "A",
        "text": "terraform plan -refresh-only"
      },
      {
        "key": "B",
        "text": "terraform show -json"
      },
      {
        "key": "C",
        "text": "terraform apply =lock=false"
      },
      {
        "key": "D",
        "text": "terraform plan -target=state"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "TexMachina4 days, 17 hours ago\nSelected Answer: C\nI think it's \"C\" as well, even though it's poorly written ('=lock' instead of '-lock'), \"plan -refresh-only\" reads the infra and\ncreates a plan showing how the state would need to change, but doesn't commit that info to the state file. If it was\n'apply -refresh-only' I'd definietly go for that, but since we don't have that option, 'C' makes more sense.\nSrikantha3 months, 3 weeks ago\nSelected Answer: A\nTerraform Plan is the right answer as it shows the difference\nBrutexLau4 months ago\nSelected Answer: C\nI don't think any of them are correct, since the State File is updated only with the `terraform apply` command, but\noption C contains an error; it should be `terraform apply -lock=false`.\nSrikantha3 months, 3 weeks ago\nI would chose A because the changes are made outside the terraform and by applying terraform configuration the\noutside changes would be overwritten",
    "votes": "Community vote distribution\nC (67%) A (33%)",
    "images": []
  },
  {
    "id": 126,
    "number": 17,
    "topic": 6,
    "question": "When should you use the force-unlock command?",
    "options": [
      {
        "key": "A",
        "text": "When you see a status message stating that you cannot acquire the lock."
      },
      {
        "key": "B",
        "text": "When apply has failed due to a state lock."
      },
      {
        "key": "C",
        "text": "When automatic unlocking has failed."
      },
      {
        "key": "D",
        "text": "When you have a high priority change."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 127,
    "number": 18,
    "topic": 6,
    "question": "The -refresh-only parameter will update your state file when used with terraform plan.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "FlacoX3 weeks, 4 days ago\nSelected Answer: B\nIt is false since terraform plan only checks/preview the changes between tfstate file and the real world infrastructure,\nbut the terraform plan -refresh-only is the one that previews the changes with the real world infrastructure and updates\nthe tfstate files.\nDash1 month ago\nSelected Answer: B\nThe terraform plan -refresh-only command operates entirely in memory. It performs a dry run that inspects your live\ninfrastructure for drift, calculates what updates are required, and generates an execution plan. However, it does not\nwrite or permanently save those changes to the physical .tfstate file\nmarkbotros3 months, 3 weeks ago\nSelected Answer: A\nA. True Explanation: The -refresh-only flag tells Terraform to: Check the real infrastructure (via provider APIs)\nCompare it with the current state file Update the state file to match reality if there are external changes But not\npropose or apply configuration changes\nFlacoX3 weeks, 5 days ago\nIt is false since terraform plan only checks/preview the changes between tfstate file and the real world infrastructure,\nbut the terraform plan -refresh-only is the one that previews the changes with the real world infrastructure and updates\nthe tfstate files.\nSrikantha4 months, 1 week ago\nSelected Answer: A\nIn the context of certification exams (like the HashiCorp Terraform Associate), when they ask if the -refresh-only\nparameter \"will update your state file,\" they are referring to the functionality of the refresh-only mode. While the plan\nphase is just a preview, the specific purpose of using that flag is to perform a state-only update. If you were to run a\nstandard terraform apply (without the flag), Terraform would try to undo the manual changes to match your code. By\n\nusing -refresh-only, you are telling Terraform to keep the manual changes and just update the state file to\nacknowledge them.\nyhalim4 months, 2 weeks ago\nSelected Answer: B\nThe -refresh-only parameter does not update the state file when used with the terraform plan command. Instead, it\nallows you to preview the changes to the Terraform state file that would occur if you were to run terraform apply -\nrefresh-only. The state file itself is only updated when you run the terraform apply -refresh-only command.",
    "votes": "Community vote distribution\nB (75%) A (25%)",
    "images": []
  },
  {
    "id": 128,
    "number": 19,
    "topic": 6,
    "question": "You corrected a typo in a resource name, changing it from aws_s3_bucket.photoes to aws_s3_bucket.photos.\nYou want to update the Terraform state so that the existing resource is recognized under the new name, without\ndestroying and recreating it.\nWhich configuration should you use?",
    "options": [
      {
        "key": "A",
        "text": "Remove the old resource from your configuration and re-import it."
      },
      {
        "key": "B",
        "text": "Run terraform apply -refresh-only."
      },
      {
        "key": "C",
        "text": "Do nothing - Terraform will automatically update the state."
      },
      {
        "key": "D",
        "text": "Add a moved block to your configuration."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 129,
    "number": 20,
    "topic": 6,
    "question": "What feature stops multiple users from operating on the Terraform state at the same time?",
    "options": [
      {
        "key": "A",
        "text": "Remote state storage"
      },
      {
        "key": "B",
        "text": "Version control"
      },
      {
        "key": "C",
        "text": "State locking"
      },
      {
        "key": "D",
        "text": "Provider constraints"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 130,
    "number": 21,
    "topic": 6,
    "question": "What does the import block do?",
    "options": [
      {
        "key": "A",
        "text": "Migrate resources from one Terraform state file to another."
      },
      {
        "key": "B",
        "text": "Install a module."
      },
      {
        "key": "C",
        "text": "Combine Terraform state files."
      },
      {
        "key": "D",
        "text": "Import existing resources into state."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 131,
    "number": 22,
    "topic": 6,
    "question": "You have successfully deployed an application that includes a resource with a public IP address. Due to a\nconfiguration oversight, no outputs were defined.\nUsing the Terraform CLI, how can you find the IP address of the resource that was deployed with minimum\ndisruption to the application?",
    "options": [
      {
        "key": "A",
        "text": "Run terraform destroy then terraform apply and look for the IP address in stdout."
      },
      {
        "key": "B",
        "text": "Run terraform state list to find the name of the resource, then terraform state show to find the attributes\nincluding public IP address."
      },
      {
        "key": "C",
        "text": "In a new folder, use the terraform_remote_state data source to load in the state file, then write an output\nfor each resource that you find the state file."
      },
      {
        "key": "D",
        "text": "Run terraform output ip_address to view the result."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 132,
    "number": 23,
    "topic": 6,
    "question": "It is _________ to change the Terraform backend from the default local backend to a different one after\nperforming your first terraform apply.",
    "options": [
      {
        "key": "A",
        "text": "discouraged"
      },
      {
        "key": "B",
        "text": "mandatory"
      },
      {
        "key": "C",
        "text": "impossible"
      },
      {
        "key": "D",
        "text": "optional"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "FlacoX2 weeks, 5 days ago\nSelected Answer: D\nIt is optional, since by default it uses local backend, it is good to use a remote backend but not neccesary. So it is not\nmandatory, not impossible, not discouraged, it is optional\nSrikantha4 months, 1 week ago\nSelected Answer: D\nGemini said The correct answer is D. optional. Why it is optional You are never forced to change your backend, but it\nis a best practice for teams or production environments. Initial State: When you run your first terraform apply,\nTerraform creates a terraform.tfstate file on your local disk (the local backend). The Transition: You can move to a\nremote backend (like AWS S3, Azure Blob Storage, or Terraform Cloud) at any point in the project lifecycle. This\nprocess is called migration.",
    "votes": "Community vote distribution\nD (100%)",
    "images": []
  },
  {
    "id": 133,
    "number": 24,
    "topic": 6,
    "question": "Which is a benefit of the Terraform state file?",
    "options": [
      {
        "key": "A",
        "text": "A state file can schedule recurring infrastructure tasks."
      },
      {
        "key": "B",
        "text": "A state file is the desired state expressed by the Terraform code files."
      },
      {
        "key": "C",
        "text": "A state file is a source of truth for resources provisioned with Terraform."
      },
      {
        "key": "D",
        "text": "A state file is a source of truth for resources provisioned with a public cloud console."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 134,
    "number": 25,
    "topic": 6,
    "question": "Which values does Terraform exclude from the state file? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "Data sources"
      },
      {
        "key": "B",
        "text": "Ephemeral resources"
      },
      {
        "key": "C",
        "text": "Resource attributes"
      },
      {
        "key": "D",
        "text": "Write-only arguments"
      },
      {
        "key": "E",
        "text": "Sensitive outputs"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 135,
    "number": 26,
    "topic": 6,
    "question": "__________ backends support state locking.",
    "options": [
      {
        "key": "A",
        "text": "Only local"
      },
      {
        "key": "B",
        "text": "Some"
      },
      {
        "key": "C",
        "text": "All"
      },
      {
        "key": "D",
        "text": "No"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 136,
    "number": 27,
    "topic": 6,
    "question": "Which backend does the Terraform CLI use by default?",
    "options": [
      {
        "key": "A",
        "text": "Remote"
      },
      {
        "key": "B",
        "text": "Local"
      },
      {
        "key": "C",
        "text": "HCP Terraform"
      },
      {
        "key": "D",
        "text": "The default backend for the cloud provider"
      },
      {
        "key": "E",
        "text": "HTTP"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 137,
    "number": 28,
    "topic": 6,
    "question": "Which command allows you to access all of the attributes and details of a resource managed by Terraform?",
    "options": [
      {
        "key": "A",
        "text": "terraform get ‘provider_type.name’"
      },
      {
        "key": "B",
        "text": "terraform state show ‘provider_type.name’"
      },
      {
        "key": "C",
        "text": "terraform state list ‘provider_type.name’"
      },
      {
        "key": "D",
        "text": "terraform state list"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 138,
    "number": 29,
    "topic": 6,
    "question": "When do you need to explicitly execute Terraform in refresh-only mode?",
    "options": [
      {
        "key": "A",
        "text": "Before every terraform plan."
      },
      {
        "key": "B",
        "text": "Before every terraform apply."
      },
      {
        "key": "C",
        "text": "Before every terraform import."
      },
      {
        "key": "D",
        "text": "None of the above."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 139,
    "number": 30,
    "topic": 6,
    "question": "You use a cloud provider account that is shared with other team members. You previously used Terraform to\ncreate a load balancer that listens on port 80. After some application changes, you updated the Terraform code\nto change the port to 443.\nYou run terraform plan and see that the execution plan shows the port changing from 80 to 443 like you\nintended. You step away to grab some coffee.\nBefore you get back to your desk, another team member manually changes the load balancer port to 443\nthrough the cloud provider console.\nWhat will happen when you run terraform apply upon returning to your desk?",
    "options": [
      {
        "key": "A",
        "text": "Terraform will change the load balancer port to 80, and then change it back to 443."
      },
      {
        "key": "B",
        "text": "Terraform will recreate the load balancer."
      },
      {
        "key": "C",
        "text": "Terraform will not make any changes to the load balancer and will update the state file to reflect the\nmanual change."
      },
      {
        "key": "D",
        "text": "Terraform will fail with an error because the state file is no longer accurate."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 140,
    "number": 31,
    "topic": 6,
    "question": "What does the default local Terraform backend store?",
    "options": [
      {
        "key": "A",
        "text": "State file"
      },
      {
        "key": "B",
        "text": "Terraform binary"
      },
      {
        "key": "C",
        "text": "Provider plugins"
      },
      {
        "key": "D",
        "text": "tfplan files"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 141,
    "number": 32,
    "topic": 6,
    "question": "Using the terraform state rm command against a resource will destroy it.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 142,
    "number": 33,
    "topic": 6,
    "question": "Which of these actions are forbidden when the Terraform state file is locked? (Choose three.)",
    "options": [
      {
        "key": "A",
        "text": "terraform apply"
      },
      {
        "key": "B",
        "text": "terraform fmt"
      },
      {
        "key": "C",
        "text": "terraform validate"
      },
      {
        "key": "D",
        "text": "terraform destroy"
      },
      {
        "key": "E",
        "text": "terraform state list"
      },
      {
        "key": "F",
        "text": "terraform plan"
      }
    ],
    "answer": [
      "A",
      "D",
      "F"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 143,
    "number": 34,
    "topic": 6,
    "question": "You decide to move a Terraform state file to Amazon S3 from another location. You write the code shown in the\nExhibit space into a file called backend.tf.\nterraform {\nbackend “s3” {\nbucket = “my-tf-bucket”\nregion = “us-east-1”\n}\n}\nWhich command will migrate your current state file to the new S3 backend?",
    "options": [
      {
        "key": "A",
        "text": "terraform refresh"
      },
      {
        "key": "B",
        "text": "terraform push"
      },
      {
        "key": "C",
        "text": "terraform state"
      },
      {
        "key": "D",
        "text": "terraform init"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 144,
    "number": 1,
    "topic": 7,
    "question": "terraform destroy is the only way to remove infrastructure with Terraform.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 145,
    "number": 2,
    "topic": 7,
    "question": "A senior admin accidentally deleted some of your cloud instances.\nWhat will Terraform do when you run terraform apply?",
    "options": [
      {
        "key": "A",
        "text": "Stop and generate an error message about the missing instances."
      },
      {
        "key": "B",
        "text": "Rebuild only the instances that were deleted."
      },
      {
        "key": "C",
        "text": "Build a completely brand new set of infrastructure."
      },
      {
        "key": "D",
        "text": "Tear down the entire workspace’s infrastructure and rebuild it."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 146,
    "number": 3,
    "topic": 7,
    "question": "You have a Terraform configuration that defines a single virtual machine with no references to it. You’ve run\nterraform apply to create the resource, then removed the resource definition from your Terraform configuration\nfile.\nWhat will happen when you run terraform apply in the working directory again?",
    "options": [
      {
        "key": "A",
        "text": "Terraform will error."
      },
      {
        "key": "B",
        "text": "Nothing will happen."
      },
      {
        "key": "C",
        "text": "Terraform will remove the virtual machine from the state file, but the resource will still exist."
      },
      {
        "key": "D",
        "text": "Terraform will destroy the virtual machine."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 147,
    "number": 4,
    "topic": 7,
    "question": "If you manually destroy resources within your infrastructure, what is the best practice for reflecting this change in\nTerraform?",
    "options": [
      {
        "key": "A",
        "text": "Run terraform import to reflect the changes in Terraform state."
      },
      {
        "key": "B",
        "text": "Manually update the state file to remove the destroyed resources."
      },
      {
        "key": "C",
        "text": "Remove the resource definition from your file and run terraform apply -refresh-only."
      },
      {
        "key": "D",
        "text": "The change will happen automatically during the next terraform apply."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "yhalim4 months, 2 weeks ago\nSelected Answer: C\nWhy C is Correct: 1) Remove the Resource Definition: If the resource has been manually destroyed, you should\nremove its definition from your Terraform configuration files (e.g., .tf files). This tells Terraform that the resource is no\nlonger part of the desired state. 2) Run terraform apply -refresh-only: This command updates the Terraform state file\nto reflect the current state of your infrastructure without making any changes to resources. Since the resource\ndefinition has been removed, Terraform will remove the corresponding resource from the state file.\nZam884 months, 3 weeks ago\nSelected Answer: C\ncorrect answer is: C. Remove the resource definition from your file and run terraform apply -refresh-only.",
    "votes": "Community vote distribution\nC (100%)",
    "images": []
  },
  {
    "id": 148,
    "number": 5,
    "topic": 7,
    "question": "When a check block’s assertion fails, Terraform blocks the current operation from executing.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha3 months, 4 weeks ago\nSelected Answer: B\nThe correct answer is B. False. When a check block’s assertion fails, Terraform reports a warning (including the\nerror_message you defined) but continues executing the current operation (plan or apply) without blocking it. This is\nthe only type of custom validation in Terraform that is intentionally non-blocking. It runs as the final step of a plan or\napply (after resources have been planned or provisioned) and is meant for ongoing health/monitoring checks rather\nthan strict enforcement.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 149,
    "number": 6,
    "topic": 7,
    "question": "You just scaled your VM infrastructure and realize you set the count variable to the wrong value. You correct the\nvalue and save your change.\nWhat must you do next to make your infrastructure match your configuration?",
    "options": [
      {
        "key": "A",
        "text": "Inspect your Terraform state because you want to change it."
      },
      {
        "key": "B",
        "text": "Run terraform apply and confirm the planned changes."
      },
      {
        "key": "C",
        "text": "Inspect all Terraform outputs to make sure they are correct."
      },
      {
        "key": "D",
        "text": "Reinitialize because your configuration has changed."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 150,
    "number": 7,
    "topic": 7,
    "question": "What does terraform destroy do?",
    "options": [
      {
        "key": "A",
        "text": "Destroys all Terraform code files in the current directory, leaves the state file intact."
      },
      {
        "key": "B",
        "text": "Destroys all infrastructure in the Terraform state file."
      },
      {
        "key": "C",
        "text": "Destroys the Terraform state file, leaves the infrastructure intact."
      },
      {
        "key": "D",
        "text": "Destroys all infrastructure in the configured Terraform provider."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 151,
    "number": 8,
    "topic": 7,
    "question": "You have a simple Terraform configuration containing one VM (virtual machine) in a cloud provider. You run\nterraform apply and the VM is created successfully.\nYou delete the VM using the cloud provider console, then run terraform apply again without changing any\nTerraform code.\nWhat happens next?",
    "options": [
      {
        "key": "A",
        "text": "Terraform will report an error."
      },
      {
        "key": "B",
        "text": "Terraform will recreate the VM."
      },
      {
        "key": "C",
        "text": "Terraform will remove the VM from the state file."
      },
      {
        "key": "D",
        "text": "Terraform will not make any changes."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 152,
    "number": 9,
    "topic": 7,
    "question": "You have never used Terraform before and would like to test it out using a shared team account for a cloud\nprovider. The shared team account already contains 15 VMs (virtual machines). You develop a new Terraform\nconfiguration containing one VM, perform terraform apply, and see that your VM was created successfully.\nHow do you delete the newly-created VM with Terraform?",
    "options": [
      {
        "key": "A",
        "text": "Delete the Terraform state file and execute terraform apply."
      },
      {
        "key": "B",
        "text": "The Terraform state file only contains one new VM. Execute terraform destroy."
      },
      {
        "key": "C",
        "text": "The Terraform state file contains all 16 VMs in the team account. Execute terraform destroy and select the\nnewly-created VM."
      },
      {
        "key": "D",
        "text": "Delete the VM using the cloud provider console, and execute terraform apply to apply the changes to the\nTerraform state file."
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 153,
    "number": 10,
    "topic": 7,
    "question": "Which parameters does the import block require? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "backend"
      },
      {
        "key": "B",
        "text": "The target resource address"
      },
      {
        "key": "C",
        "text": "provider"
      },
      {
        "key": "D",
        "text": "The resource ID"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 154,
    "number": 11,
    "topic": 7,
    "question": "You have set the TF_LOG_PATH environment variable for Terraform, and you would like to ensure the logs\ncontain all debug-level messages and verbose process logs.\nWhich action should you take?",
    "options": [
      {
        "key": "A",
        "text": "Set the TF_LOG environment variable to TRACE."
      },
      {
        "key": "B",
        "text": "Update the Terraform GLI configuration file."
      },
      {
        "key": "C",
        "text": "Add a log argument to the terraform block."
      },
      {
        "key": "D",
        "text": "Run the terraform output command."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 155,
    "number": 1,
    "topic": 8,
    "question": "Your team uses HCP Terraform to manage your infrastructure. You need to make a change to an infrastructure\nstack running in a public cloud.\nWhich pattern follows Infrastructure as Code best practices for making a change?",
    "options": [
      {
        "key": "A",
        "text": "Make the change via the public cloud API endpoint."
      },
      {
        "key": "B",
        "text": "Use the public cloud console to make the change."
      },
      {
        "key": "C",
        "text": "Run the public cloud CLI tool to make the change."
      },
      {
        "key": "D",
        "text": "Submit a pull request and wait for an approved merge of the change."
      },
      {
        "key": "E",
        "text": "Clone the repository containing your infrastructure code and then run the code."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 156,
    "number": 2,
    "topic": 8,
    "question": "Which of the following does HCP Terraform perform during a health assessment for a workspace? (Choose\ntwo.)",
    "options": [
      {
        "key": "A",
        "text": "Sentinel policy checks"
      },
      {
        "key": "B",
        "text": "Resource drift detection"
      },
      {
        "key": "C",
        "text": "Estimate infrastructure cost"
      },
      {
        "key": "D",
        "text": "Check block validation"
      },
      {
        "key": "E",
        "text": "Terraform test execution"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "comments": "Srikantha4 months, 1 week ago\nSelected Answer: BD\nhe correct answers are B. Resource drift detection and D. Check block validation. What is an HCP Terraform Health\nAssessment? A health assessment is a background process in HCP Terraform (formerly Terraform Cloud) that\nmonitors your infrastructure for \"correctness\" without you having to manually trigger a plan. It is specifically designed\nto catch two things: B. Resource drift detection: It checks if the actual infrastructure has been changed outside of\nTerraform (e.g., someone manually edited a setting in the AWS Console). D. Check block validation: It executes any\ncheck blocks you have defined in your code. This is used to verify functional status, such as whether a website is\nreturning a 200 OK status or if a certificate is nearing expiration.",
    "votes": "Community vote distribution\nBD (100%)",
    "images": []
  },
  {
    "id": 157,
    "number": 3,
    "topic": 8,
    "question": "You manage two workspaces in your HCP Terraform organization. The first workspace manages your network\nconfiguration. The second workspace manages your compute resources, and retrieves values from the\nnetworking workspace.\nWhat HCP Terraform feature lets you run an apply operation on the compute workspace every time you update\nthe networking workspace?",
    "options": [
      {
        "key": "A",
        "text": "Projects"
      },
      {
        "key": "B",
        "text": "Policy"
      },
      {
        "key": "C",
        "text": "Run tasks"
      },
      {
        "key": "D",
        "text": "Run triggers"
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 158,
    "number": 4,
    "topic": 8,
    "question": "You can configure multiple cloud blocks in your Terraform configuration to connect your workspace to both HCP\nTerraform and your Terraform Enterprise instance.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "comments": "Srikantha3 months, 4 weeks ago\nSelected Answer: B\nThe correct answer is B. False. You can only provide one cloud block per Terraform configuration. The cloud block\n(nested inside the top-level terraform block) is how you connect a workspace to either HCP Terraform or a Terraform\nEnterprise instance. It is not repeatable — Terraform explicitly forbids multiple cloud blocks in the same configuration.",
    "votes": "Community vote distribution\nB (100%)",
    "images": []
  },
  {
    "id": 159,
    "number": 5,
    "topic": 8,
    "question": "Which HCP Terraform feature is recommended when you want to use the same cloud provider credentials\nacross multiple workspaces?",
    "options": [
      {
        "key": "A",
        "text": "Variable sets"
      },
      {
        "key": "B",
        "text": "Version Control System (VCS) integration"
      },
      {
        "key": "C",
        "text": "The terraform_remote_state data source"
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 160,
    "number": 6,
    "topic": 8,
    "question": "You are responsible for a set of infrastructure which is managed by two workspaces: example-network and\nexample-compute. The example-compute workspace uses data from output values configured in the example-\nnetwork workspace, and must be deployed afterward. Currently, this is a manual process:\nAn operator deploys changes to the example-network workspace.\nThey manually copy the output values from the example-network workspace to input variables configured for the\nexample-compute workspace.\nThey deploy the example-compute workspace.\nWhich HCP Terraform features can you use to automate this process? (Choose two.)",
    "options": [
      {
        "key": "A",
        "text": "A health check configured on the example-compute workspace to create a plan when HCP Terraform\napplies changes to the example-network workspace."
      },
      {
        "key": "B",
        "text": "A run trigger configured on the example-network workspace to automatically plan changes to the\nexample-compute workspace after every apply."
      },
      {
        "key": "C",
        "text": "A health check configured on the example-network workspace to create a plan on the example-compute\nworkspace when HCP Terraform applies changes to it."
      },
      {
        "key": "D",
        "text": "A run trigger configured on the example-compute workspace to automatically plan changes after HCP\nTerraform applies changes to the example-network workspace."
      },
      {
        "key": "E",
        "text": "A tfe_outputs data source configured in the example-compute workspace to automatically load output\nvalues from the example-network workspace."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 161,
    "number": 7,
    "topic": 8,
    "question": "Where does HashiCorp recommend you store API tokens and other secrets within your team’s Terraform\nworkspaces? (Choose three.)",
    "options": [
      {
        "key": "A",
        "text": "In a terraform.tfvars file, checked into your version control system."
      },
      {
        "key": "B",
        "text": "In an environment variable and referenced with TF_VAR_variablename."
      },
      {
        "key": "C",
        "text": "In HashiCorp Vault."
      },
      {
        "key": "D",
        "text": "In a plaintext document on a shared drive."
      },
      {
        "key": "E",
        "text": "In an HCP Terraform variable, with the sensitive option checked."
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 162,
    "number": 8,
    "topic": 8,
    "question": "Which of these statements about HCP Terraform workspaces is false?",
    "options": [
      {
        "key": "A",
        "text": "You can trigger plans and applies using version control system integrations."
      },
      {
        "key": "B",
        "text": "HCP Terraform workspaces offer role-based access controls."
      },
      {
        "key": "C",
        "text": "You must use the CLI to switch between workspaces."
      },
      {
        "key": "D",
        "text": "HCP Terraform workspaces can securely store cloud credentials."
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 163,
    "number": 9,
    "topic": 8,
    "question": "How does an HCP Terraform integration using the cloud block differ from remote backends, such as S3?",
    "options": [
      {
        "key": "A",
        "text": "Using the cloud block automatically encrypts state files at rest and in transit."
      },
      {
        "key": "B",
        "text": "Using the cloud block requires using Terraform Enterprise."
      },
      {
        "key": "C",
        "text": "The cloud block supports multiple backends simultaneously."
      },
      {
        "key": "D",
        "text": "Using the cloud block enables remote operations on infrastructure managed by HCP Terraform or\nTerraform Enterprise."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 164,
    "number": 10,
    "topic": 8,
    "question": "Which features do HCP Terraform workspaces provide that are not available in Terraform Community Edition?\n(Choose three.)",
    "options": [
      {
        "key": "A",
        "text": "Automatic detection of common security issues."
      },
      {
        "key": "B",
        "text": "Remote execution of Terraform operations."
      },
      {
        "key": "C",
        "text": "Support for multiple cloud providers."
      },
      {
        "key": "D",
        "text": "Store your configuration in a Version Control System (VCS)."
      },
      {
        "key": "E",
        "text": "State versions and run history."
      },
      {
        "key": "F",
        "text": "Store Terraform and environment variables in variable sets."
      }
    ],
    "answer": [
      "B",
      "E",
      "F"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 165,
    "number": 11,
    "topic": 8,
    "question": "What HCP Terraform feature helps organize similar workspaces together and let you configure them as a\ngroup?",
    "options": [
      {
        "key": "A",
        "text": "Variable sets"
      },
      {
        "key": "B",
        "text": "Change requests"
      },
      {
        "key": "C",
        "text": "Projects"
      },
      {
        "key": "D",
        "text": "Policy sets"
      }
    ],
    "answer": [
      "C"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 166,
    "number": 12,
    "topic": 8,
    "question": "You are an administrator of your HCP Terraform organization. Recently, a member of your organization\naccidentally applied a change to a workspace that manages infrastructure owned by a different team.\nWhat HCP Terraform features can you use to help prevent similar accidents in the future?",
    "options": [
      {
        "key": "A",
        "text": "Create separate teams in HCP Terraform for each team in your organization, then assign project and/or\nworkspace permissions to each team."
      },
      {
        "key": "B",
        "text": "Configure your workspaces to use the VCS-driven workflow, then update permissions to each repository\nin your VCS."
      },
      {
        "key": "C",
        "text": "Enable two-factor authentication for your HCP organization, then limit access to only specific users within\nyour organization."
      },
      {
        "key": "D",
        "text": "For each workspace in your organization, edit its settings, and then assign only those users that are\nauthorized to plan and apply changes to the workspace."
      }
    ],
    "answer": [
      "A"
    ],
    "comments": "",
    "votes": "",
    "images": []
  },
  {
    "id": 167,
    "number": 13,
    "topic": 8,
    "question": "Your risk management organization requires that new AWS S3 buckets must be private, and their contents must\nbe encrypted at rest.\nHow can HCP Terraform automatically and proactively enforce this security control?",
    "options": [
      {
        "key": "A",
        "text": "With an S3 module with proper settings for buckets."
      },
      {
        "key": "B",
        "text": "By auditing cloud storage buckets with a vulnerability scanning tool."
      },
      {
        "key": "C",
        "text": "By adding variables to each HCP Terraform workspace to ensure these settings are always enabled."
      },
      {
        "key": "D",
        "text": "With a Sentinel policy, which runs before every apply."
      }
    ],
    "answer": [
      "D"
    ],
    "comments": "",
    "votes": "",
    "images": []
  }
];
