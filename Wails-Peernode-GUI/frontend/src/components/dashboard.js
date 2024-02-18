import React, { useState } from 'react';
import '../styles/dashboard.css'

const Dashboard = () => {
    return (
        <div className="main-content">
            <header className="app-header">
                <h1>Welcome to Peer App</h1>
                <p>Your go-to app for seamless peer-to-peer interactions.</p>
            </header>
            <main className="dashboard-main">
                <section className="file-upload">
                    <h2 className="section-title">Upload Files</h2>
                    <input type="file" multiple />
                    <p className="info-text">Drag and drop files here or click to select files to upload.</p>
                </section>
                <section className="about-ipfs">
                    <h2 className="section-title">About IPFS</h2>
                    <p className="info-text">IPFS is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open.</p>
                </section>
            </main>
            <footer>
                <p>Peer App © 2024</p>
            </footer>
        </div>
    );
};

export default Dashboard;
