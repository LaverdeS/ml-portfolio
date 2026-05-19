// src/data/portfolio.ts

export const meta = {
  name: 'Sebastian Laverde Alfonso',
  title: 'ML Engineer',
  subtitle: 'Agentic AI Systems · LLM Infrastructure · Document Intelligence',
  location: 'Leipzig, Germany',
  email: 'lavmlk20201@gmail.com',
  phone: '(+49) 151 2279 8161',
  linkedin: 'https://linkedin.com/in/sebastian-laverde-alfonso',
  github: 'https://github.com/LaverdeS',
  huggingface: 'https://huggingface.co/laverdes',
  cvPath: '/cv/CV_Sebastian_Laverde_2026_ATS_v2.docx', // matches user description
  summary: `Machine Learning Engineer with 7+ years of progressive experience across the full AI lifecycle — from research and fine-tuning through production deployment, observability, and scale. Built and shipped deep learning systems for document intelligence, vision-language understanding, NLP, and multimodal AI; recent focus on agentic AI architectures and LLM infrastructure. Sole architect and technical owner of a complete multi-agent SaaS platform at Sapience AI Corporation, deploying 4 production agents, a custom A2A orchestration protocol, and hybrid RAG on Google Cloud.`,
}

export const metrics = [
  { value: '7+', label: 'Years in ML' },
  { value: '4', label: 'Production Agents' },
  { value: '90%+', label: 'Doc Parsing Accuracy' },
  { value: '72%', label: 'Storage Reduction (RAG)' },
  { value: '76%', label: 'Form Extraction Accuracy' },
]

export const experience = [
  {
    id: 'sapience',
    company: 'Sapience AI Corporation',
    role: 'Fullstack AI Engineer',
    period: 'Nov 2025 – Apr 2026',
    location: 'Remote (Germany)',
    type: 'Industry',
    tags: ['LangGraph', 'GCP', 'Qdrant', 'Vertex AI', 'FastAPI', 'OpenTelemetry'],
    headline: 'Sole architect and technical owner of the company\'s entire agentic AI infrastructure — 4 production agents, custom A2A protocol, and full GCP deployment.',
    bullets: [
      'Architected and deployed 4 production agents (Membership Intelligence with HubSpot, Corporate Research with financial news/market APIs, hybrid RAG with session memory, and Social Media with stateful human-in-the-loop validation).',
      'Designed custom A2A (Agent-to-Agent) protocol on Pydantic, using JWT claims for authentication and tenant isolation, with Server-Sent Events (SSE) streaming.',
      'Optimized hybrid retrieval (dense text-embedding-005 + sparse SPLADE++ fused via server-side RRF in Qdrant) and reduced storage by 72% using scalar INT8 quantization.',
      'Created two-tier cache (request-level and entity-level) with soft/hard TTL, stale-while-refresh background updates, and jitter to avoid thundering-herd issues.',
      'Implemented distributed tracing with OpenTelemetry/GCP Cloud Trace and LLM-specific telemetry via Traceloop SDK, establishing SLOs and structured logging.'
    ],
  },
  {
    id: 'unstructured',
    company: 'Unstructured Technologies',
    role: 'Data Scientist / ML Engineer',
    period: 'Jan 2022 – Dec 2024',
    location: 'Remote',
    type: 'Industry',
    tags: ['Donut', 'XGBoost', 'NLP', 'VLM', 'Document AI', 'PyTorch'],
    headline: 'Fine-tuned vision-language models for document intelligence and built structured extraction pipelines.',
    bullets: [
      'Fine-tuned transformer-based vision-language models (Donut) on proprietary document datasets to parse diverse layouts directly to custom JSON structures, achieving 90%+ layout accuracy.',
      'Developed high-resolution PDF partitioning and OCR pipelines to improve retrieval benchmarks and customer extraction satisfaction.',
      'Trained and optimized lightweight XGBoost and sentence-embedding classifiers for key-value extraction, raising extraction accuracy from a 40% baseline to 76% on standard layouts.',
      'Owned annotation workflows, evaluation frameworks, and document chunking strategies for financial RAG pipelines.'
    ],
  },
  {
    id: 'dlr',
    company: 'German Aerospace Centre (DLR)',
    role: 'Research Assistant, Deep Learning',
    period: 'Feb 2021 – Oct 2021',
    location: 'Germany',
    type: 'Research',
    tags: ['VAE', 'Privacy NLP', 'Synthetic Data', 'Docker', 'PyTorch'],
    headline: 'Modelled medical record de-identification as conditional text generation using a generative VAE model.',
    bullets: [
      'Designed a conditional Variational Autoencoder (VAE) combined with holistic discriminators for medical record de-identification in a high-security research environment.',
      'Delivered a fully Dockerized, end-to-end generative AI system to synthesize privacy-compliant medical records conditioned on patient profiles for downstream research.'
    ],
  },
  {
    id: 'webis',
    company: 'Webis Group, Bauhaus-Universität Weimar',
    role: 'IR & Deep Learning Research Assistant',
    period: 'Oct 2018 – Apr 2022',
    location: 'Weimar, Germany',
    type: 'Research',
    tags: ['BERT', 'Zero-shot', 'Active Learning', 'Code Gen', 'Transformers'],
    headline: 'Developed multilingual classifiers and code generation pipelines using Transformer models.',
    bullets: [
      'Developed APIs for active learning of multilingual zero-shot text classifiers using BERT, achieving 90%+ accuracy across 100 categories and drastically reducing label dependence.',
      'Engineered deep neural networks for automatic code generation (natural language to Python) with high fidelity on simple tasks.',
      'Trained argument search text classifiers, achieving 70% accuracy in predicting political inclinations from argumentative text.'
    ],
  },
  {
    id: 'omdena',
    company: 'Omdena — Collaborative AI Platform',
    role: 'ML Engineer & Community Builder',
    period: 'Oct 2018 – 2020',
    location: 'Remote',
    type: 'Community',
    tags: ['Anomaly Detection', 'NLP', 'Social Good', 'Adversarial Training'],
    headline: 'Delivered collaborative ML prototypes for renewable energy, harassment classification, and planetary science.',
    bullets: [
      'Collaborated on Mars anomaly detection using deep adversarial training, publishing technical findings on adversarial methods.',
      'Built NLP classification models to identify and categorize sexual harassment reports for the Red Dot Foundation (Safecity).',
      'Applied ML modeling for renewable energy access and prediction across African markets (Renewable Africa RA365).'
    ],
  },
  {
    id: 'consultant',
    company: 'Data Analysis Consultant / Freelancer',
    role: 'Data Analyst & Automation Specialist',
    period: 'Nov 2012 – Oct 2017',
    location: 'Bogotá / Remote',
    type: 'Industry',
    tags: ['BI', 'Excel', 'Reporting', 'Automations', 'SQL'],
    headline: 'Automated business intelligence and reporting dashboards across client verticals.',
    bullets: [
      'Automated reporting workflows for data-intensive business processes using Microsoft services and SQL queries.',
      'Designed interactive business dashboards for real-time analytics and Key Performance Indicator (KPI) visualization.'
    ],
  }
]

export const projects = [
  {
    id: 'multi-agent-saas',
    title: 'Multi-Agent SaaS Platform',
    company: 'Sapience AI',
    description: 'Sole architect of 4 production agents: Membership Intelligence (HubSpot + ReAct), Corporate Research (Tavily + yfinance, 21 companies), Enterprise RAG Agent, and Social Media Agent with LinkedIn integration and stateful approval workflows.',
    architecture: ['LangGraph', 'GCP Cloud Run', 'Qdrant', 'Vertex AI', 'OpenTelemetry'],
    outcome: '4 agents in production, serving enterprise clients with multi-tenant isolation',
    type: 'Agentic AI',
  },
  {
    id: 'hybrid-rag',
    title: 'Hybrid RAG Pipeline',
    company: 'Sapience AI',
    description: 'Combined 768-dim dense vectors (text-embedding-005) with SPLADE++ sparse vectors and server-side RRF in Qdrant. Scalar INT8 quantisation. Two-tier query caching (soft/hard TTL, stale-while-refresh, jitter).',
    architecture: ['Qdrant', 'SPLADE++', 'text-embedding-005', 'RRF', 'FastEmbed'],
    outcome: '72% storage reduction, zero measurable precision loss, thundering-herd failures eliminated',
    type: 'RAG',
  },
  {
    id: 'a2a-protocol',
    title: 'A2A Orchestration Protocol',
    company: 'Sapience AI',
    description: 'Custom Pydantic-based microservice orchestration framework with JWT authentication, org-scoped multi-tenancy, and SSE event streaming. Type-safe, independently deployable agent services.',
    architecture: ['Pydantic', 'JWT', 'SSE', 'FastAPI', 'GCP Cloud Run'],
    outcome: 'Production-grade inter-agent communication with full org isolation',
    type: 'Infrastructure',
  },
  {
    id: 'donut-finetuning',
    title: 'Document VLM Fine-tuning',
    company: 'Unstructured Technologies',
    description: 'Fine-tuned Donut (vision-language transformer) on proprietary document datasets to parse diverse layouts into structured JSON. Progressive optimisation with high-resolution PDF partitioning strategies.',
    architecture: ['Donut', 'PyTorch', 'Transformers', 'PEFT'],
    outcome: '90%+ accuracy on invoices, receipts, and forms',
    type: 'ML / Fine-tuning',
  },
  {
    id: 'form-extraction',
    title: 'Key-Value Form Extraction',
    company: 'Unstructured Technologies',
    description: 'Trained lightweight classifiers combining XGBoost + sentence embeddings + NLP features for key-value extraction from complex form images. Iterative feature engineering and data-driven model selection.',
    architecture: ['XGBoost', 'Sentence Transformers', 'Scikit-learn'],
    outcome: 'Extraction accuracy lifted from 40% baseline to 76%',
    type: 'ML / NLP',
  },
  {
    id: 'privacy-nlp',
    title: 'Privacy-Preserving Medical NLP',
    company: 'DLR (German Aerospace Centre)',
    description: 'Modelled medical record de-identification as conditional text generation using a VAE with holistic discriminators. Dockerized end-to-end solution for synthesising privacy-compliant records conditioned to patient profiles.',
    architecture: ['VAE', 'PyTorch', 'Docker', 'TensorFlow'],
    outcome: 'Novel privacy-preserving NLP approach enabling downstream research without real patient data',
    type: 'Research',
  },
]

export const skills = [
  {
    domain: 'Agentic AI & Orchestration',
    icon: 'Bot',
    items: ['LangGraph', 'LangChain', 'CrewAI', 'AutoGen', 'LlamaIndex', 'ReAct', 'Plan-and-Solve', 'A2A Protocol', 'MCP', 'Multi-Agent Systems', 'Stateful Workflows', 'Tool Calling', 'Reflection Loops', 'SSE Streaming', 'Multi-Tenancy'],
  },
  {
    domain: 'RAG & Information Retrieval',
    icon: 'Database',
    items: ['Hybrid RAG', 'SPLADE++', 'RRF Fusion', 'Qdrant', 'FAISS', 'Pinecone', 'Dense Embeddings', 'Cross-encoder Reranking', 'Document Chunking', 'Query Caching', 'Semantic Search', 'Multi-tenant Retrieval', 'Unstructured Library', 'Markitdown'],
  },
  {
    domain: 'LLM Engineering',
    icon: 'Brain',
    items: ['LoRA / QLoRA', 'RLHF / DPO', 'Instruction Tuning', 'Prompt Engineering', 'Vertex AI / Gemini', 'Anthropic Claude', 'OpenAI', 'Model Quantisation (ONNX, INT8)', 'LLM Evaluation', 'Hallucination Detection', 'Context Window Management'],
  },
  {
    domain: 'Applied ML & Deep Learning',
    icon: 'Layers',
    items: ['PyTorch', 'TensorFlow', 'Transformers (BERT, Donut, T5)', 'Vision-Language Models', 'Computer Vision', 'NLP Pipelines', 'XGBoost', 'Active Learning', 'Zero-shot Learning', 'Synthetic Data Generation', 'VAE'],
  },
  {
    domain: 'MLOps & Production AI',
    icon: 'Settings',
    items: ['FastAPI', 'Docker', 'CI/CD', 'MLflow', 'Weights & Biases', 'DVC', 'LangSmith', 'OpenTelemetry', 'Traceloop SDK', 'GCP Cloud Trace', 'Latency SLOs', 'A/B Testing'],
  },
  {
    domain: 'Cloud & Infrastructure',
    icon: 'Cloud',
    items: ['GCP Cloud Run', 'Vertex AI', 'Firestore', 'Cloud Storage', 'Cloud Build', 'Secret Manager', 'IAM', 'Artifact Registry', 'AWS (S3, SageMaker, Lambda, EC2)', 'Azure', 'Kubernetes'],
  },
]

export const publications = [
  {
    title: 'Financial Report Chunking for Effective Retrieval Augmented Generation',
    authors: 'Jimeno Yepes A., You Y., Milczek J., Laverde S., Li L.',
    venue: 'arXiv:2402.05131',
    year: 2024,
    url: 'https://arxiv.org/abs/2402.05131',
  },
  {
    title: 'Automatic Classification of Sexual Harassment Cases',
    authors: 'Sebastian Laverde, Red Dot Foundation (Safecity project)',
    venue: 'Omdena Technical Publication',
    year: 2019,
    url: '',
  },
  {
    title: 'Marsi-anomaly Detection Through Deep Adversarial Training',
    authors: 'Sebastian Laverde, University of Bern / Omdena Project',
    venue: 'Omdena Technical Publication',
    year: 2019,
    url: '',
  }
]

export const education = [
  {
    degree: 'Agentic AI Pioneer Program',
    institution: 'Western State University & Analytics Vidhya',
    year: '2025',
    focus: 'Agentic AI systems design, LLM orchestration, production deployment',
  },
  {
    degree: 'MSc, Computer Science for Digital Media',
    institution: 'Bauhaus-Universität Weimar',
    year: '2018 – 2022',
    focus: 'Deep learning, NLP, information retrieval, multilingual zero-shot learning',
  },
  {
    degree: 'BSc, Electronic Engineering',
    institution: 'Pontifical Xavierian University, Bogotá',
    year: '2009 – 2017',
    focus: 'Systems control, digital signal processing, computing fundamentals',
  },
]
