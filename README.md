# Jots Prompts Library

A community-driven collection of journaling prompts and reflection templates designed to help people think better, learn faster, and grow professionally. This library is fully open‑source — anyone can contribute, and anyone can use the prompts freely.

---

## ⭐ Why This Repo Matters

Reflection is one of the most underestimated skills. This repository makes structured reflection accessible to everyone, whether or not they use Jots.

If this project helps you, consider starring the repo and contributing your own prompts.

---

## 📦 Repository Structure

```
/
  prompts/
  templates/
  schema/
    prompt.schema.json
    template.schema.json
  CONTRIBUTING.md
  README.md
```

* **prompts/** contains individual prompt files (Markdown or JSON).
* **templates/** contains longer-form reflection structures.
* **schema/** defines the expected format for prompts and templates.
* **develop** branch collects community PRs.
* **main** is the stable branch consumed by the Jots app.

---

## 🙌 Contributing

We welcome contributions from everyone!

### Quick guide:

1. Fork the repo.
2. Create a new prompt or template inside the appropriate folder.
3. Follow the metadata format shown in the CONTRIBUTING.md.
4. Submit a pull request against the `develop` branch.

GitHub Actions will validate your submission automatically.

---

## 📝 Example Prompt Format

```
---
tags: ["growth", "obstacles"]
author: "@your_github_username"
---

What's one thing you avoided this week?
```

---

## 📝 Example Template Format

```
---
title: "Weekly Reflection Template"
tags: ["growth", "obstacles"]
author: "@your_github_username"
---

- What went well this week?
- What progress are you most proud of?
- What felt difficult or unclear?
- How did you handle setbacks?
- What did you learn about your work or yourself?
- What should you take into next week?
- What should you focus on next week?
- What would make the biggest impact?
```

---

## 🆕 Weekly Updates

Every week, new prompts and templates merged into `develop` are rolled into `main`.
A changelog entry summarizes what’s new:

```
## December 5, 2025
- New Prompts
...
- New Templates
...
```

---

## 📫 Community

Discussions, ideas, and suggestions are welcome in the Issues tab.

Let's build the world’s best open-source reflection library together!
