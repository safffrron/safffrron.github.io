+++
date = '2025-09-11T22:50:45+05:30'
draft = false
title = 'Projects'
hiddenInHomeList = true
+++


<!--more-->


<style>
.left 
{
    text-align: left;
}
.right
{
    text-align: right;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
.project .description h5{
    margin-top: 8px;
    padding-top: 0px;
    display: grid;
    grid-template-columns: 2.5fr 1fr ;
}
.project .description p:not(h5)
{
    margin-top: 5px;
    padding-top: 0px;
    margin-bottom: 2px;
    padding-bottom: 0px;
}
.container {
    display: flex;
    height: 100vh;
}
.container .content .About a
{
    text-decoration: none;
}



.content {
    /* width: 80%; */
    /* padding-right: 20%; */
    margin-top: 4px;
    padding-top: 20px;
}
.content h5{
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;

}
.content h3 
{
    font-size: 18px;
    color: #333;
    margin-top: 10px;
    padding-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;

}
.content h2 {
    font-size: 24px;
    color: #333;
    margin-top: 10px;
    padding-top: 0px;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.content p {
    font-size: 14px;
    color: #333;
    line-height: 1.05;
    margin-top: 10px;
    padding-top: 0px;
    margin-bottom: 10px;
    padding-bottom: 0px;
}

.content .page .tools
{
    font-weight:599;
}

.content .page a{
    font-size: 14px;
    text-decoration: none;
    color: #20469e;
}
.project{
        display: grid;
    grid-template-columns: 1fr 2.5fr;
    justify-content: center;
    align-items: center;
    place-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.project img
{
    justify-content: center;
    align-items: center;
    height: 125px;
    margin-right: 30px;
    margin-left: 0px;
}
.content .page 
{
    display: grid;
}
</style>


<div class="content">
            <div class="page">
                <br>
                <div class="project">
                    <img src="/images/llm.png" alt="LLM Scraper" class="enigma"/>
                    <div class="description">
                        <h3>LLM-Based Scraper for Amazon Order Information</h3>
                        <h5>
                            <p class="left">Self Project</p>
                            <p class="right">April, 2024 &emsp;</p>
                        </h5>
                        <p>The LLM Fetcher is an automation project that extracts structured order history data from Amazon using Python and Selenium. It securely handles authentication, navigates through the order history page, and retrieves details such as order IDs, product names, prices, and delivery status. Data is stored in raw HTML as well as structured JSON/CSV formats. The project also integrates an open-source LLM (GPT-Neo) for processing, with flexibility to swap in advanced models like GPT-4. This projects requires basic knowledge in web automation, data extraction, and LLM integration.</p>
                        <p class="tools">Tools and Technologies used: Python, Selenium, Hugging Face Transformers (GPT-Neo), JSON, CSV, Git/GitHub </p>
                        <a href="https://github.com/safffrron/LLM-Scraper" target="_blank">[ Github Link ]</a>
                    </div>
                </div>
                <br>
                <div class="project">
                    <img src="/images/icml.png" alt="ICML Paper " class="icml"/>
                    <div class="description">
                        <h3>Curiosity Driven Exploration via Self Supervised Prediction</h3>       
                        <h5>
                            <p class="left">Instructor : Dr. Ashutosh Modi</p>
                            <p class="right">Jan,2024 - April,2024 &emsp;</p>
                        </h5>
                        <p>This repository implements the Intrinsic Curiosity Module (ICM) by integrating it into three reinforcement learning algorithms: DQN, A3C, and PPO. Inspired by the ICML paper Curiosity-driven Exploration by Self-supervised Prediction by Deepak Pathak, Pulkit Agrawal, Alexei A. Efros, and Trevor Darrell, the project explores curiosity-driven exploration in environments with sparse or no rewards. The ICM module provides an intrinsic reward signal by predicting the agent’s future state, encouraging exploration and learning. The code demonstrates how curiosity can enhance performance across different RL algorithms. More details can be found on the original project page: https://pathak22.github.io/noreward-rl/</p>
                        <p class="tools">Tools and Technologies used: Python, PyTorch, OpenAI Gym, DQN, A3C, PPO, Git/GitHub </p>
                        <a href="https://github.com/safffrron/ICML_Curiosity_Exploration" target="_blank">[ Github Link ]</a>
                    </div>
                </div>
                <br>
                <div class="project">
                    <img src="/images/drl.webp" alt="CS780 DRL" class="drl"/>
                    <div class="description">
                        <h3>Exploration and Analysis of Deep Reinforcement Learning Methods</h3>
                        <h5>
                            <p class="left"> Course Project </p>
                            <p class="right">Jan,2024 - April,2024 &emsp;</p>
                        </h5>
                        <p>This module provides a comprehensive implementation of Reinforcement Learning (RL) concepts, algorithms, and experiments. It begins with the fundamentals of environment dynamics and custom environment creation using the OpenAI Gymnasium API, followed by registering and running environments. Classical problems such as Bandit-Walk and Random-Walk are analyzed, with solutions grounded in Markov Decision Processes (MDP) and Bellman’s equations. The project covers exploration strategies (e.g., epsilon-greedy, UCB), probabilistic prediction methods (Monte Carlo, TD, TD(λ)), and control algorithms (SARSA, Q-Learning, Double Q-Learning, DYNA-Q). It also extends into Deep RL with implementations of DQN variants, PPO, TD3, DDPG, and more, along with plots and comparative analyses.</p>
                        <p class="tools">Tools and Technologies used: Python, NumPy, PyTorch, OpenAI Gymnasium, Matplotlib, Git/GitHub </p>
                        <a href="https://github.com/safffrron/Analysis-of-Deep-Reinforcement-Learning" target="_blank">[ Github Link ]</a>
                    </div>
                </div>
                <br>
                <div class="project">
                    <img src="/images/cvinc.png" alt="CVC" class="enigma"/>
                    <div class="description">
                        <h3>Computer Vision using C</h3>
                        <h5>
                            <p class="left"> Summer Project, Stamatics, IIT Kanpur</p>
                            <p class="right">July, 2023 &emsp;</p>
                        </h5>
                        <p>This project implements a variety of image processing and computer vision techniques in C, with Python bindings for experimentation. It begins with building core image operations such as pixel access, copying, grayscale conversion, color shifting, clamping, and RGB↔HSV transformations. Advanced modules include image resizing using nearest-neighbor and bilinear interpolation, image filtering with box, Gaussian, high-pass, sharpen, and emboss filters, and convolutions for smoothing and feature extraction. The project further explores hybrid images using frequency separation, Sobel filters for edge detection and gradient visualization, and colorized edge maps. All implementations were tested through a Python compatibility layer with visual outputs.</p>
                        <p class="tools">Tools and Technologies used: C, Python, NumPy, stb_image, OpenCV (concepts), Git/GitHub, Matplotlib </p>
                        <a href="https://github.com/safffrron/Computer-Vision-using-C" target="_blank">[ Github Link ]</a>
                    </div>
                </div>
                <br>
                <div class="project">
                    <img src="/images/astro.jpeg" alt="TDOAAR" class="enigma"/>
                    <div class="description">
                        <h3>Tour De OAAR </h3>
                        <h5>
                            <p class="left"> [ Mentor ] Summer Project, Astronomy Club, IIT Kanpur</p>
                            <p class="right">July, 2023 &emsp;</p>
                        </h5>
                        <p>As a Project Mentor for Tour De OAAR under the Astronomy Club, IIT Kanpur, I guided a group of 14 students from May to July 2023. The mentorship involved teaching Python and its libraries, supervising hands-on mini-projects, and providing structured learning support. Along with two other mentors, I contributed to sessions on astronomy fundamentals and telescope operations. The projects focused on building automation tools for the campus observatory, including a weather monitoring system. I assisted students in leveraging APIs and the JSON library in Python, helping them gain both practical programming and web development experience.</p>
                        <p class="tools">Tools and Technologies used: Python, JSON, REST APIs, Web Development, Git/GitHub, Jupyter Notebook </p>
                        <a href="https://github.com/safffrron/TourDeOAAR" target="_blank">[ Github Link ]</a>
                    </div>
                </div>
                <br><br><br>
            </div>
</div>