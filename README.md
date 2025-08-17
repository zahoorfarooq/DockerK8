My-POD-App: Code → Container → AWS EKS with GitHub Actions CI/CD

A fully automated DevOps pipeline that takes My-POD-App from source code → Docker container → AWS EKS → production deployment — all triggered by a Git push.

🚀 Features

Dockerized Node.js App – lightweight and production-ready

AWS ECR + EKS – secure container registry + scalable Kubernetes cluster

GitHub Actions CI/CD – automated build, push, and deploy on commit

Zero manual steps – watch it happen live via GitHub & AWS Consoles

📂 Project Structure
my-pod-app/
├── Dockerfile
├── index.js
├── package.json
├── deployment.yaml
└── .github/
    └── workflows/
        └── deploy.yml

🛠️ Prerequisites

Docker installed locally

AWS CLI configured with IAM user credentials

kubectl configured for your EKS cluster

GitHub repo secrets set:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_REGION

ECR_REPO_URI

🏗️ Build and Run Locally
docker build -t my-pod-app:1.0.0 .
docker run -p 3000:3000 my-pod-app:1.0.0


Visit http://localhost:3000 to test.

☁️ Deploy via GitHub Actions

Push code to main branch.

GitHub Actions pipeline builds & pushes Docker image to ECR.

Pipeline updates Kubernetes deployment on EKS automatically.

Check progress in:

GitHub → Actions → Workflow Runs

AWS Console → ECR/EKS/EC2 Load Balancer tabs

Docker CLI for local image builds

📊 Architecture
Developer → GitHub → CI Build Logs → ECR → EKS → Load Balancer → User

📖 Blog Post

Read the full breakdown here: https://zahoorfarooq.hashnode.dev/from-code-to-cloud-deploying-my-pod-app-on-aws-eks-with-github-actions-cicd

📜 License

This project is licensed under the MIT License.
