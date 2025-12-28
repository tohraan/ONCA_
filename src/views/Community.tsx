
import React, { useState } from 'react';
import KPICard from '../components/KPICard';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import QuickActions from '../components/QuickActions';
import { CommunityPost, Expert } from '../types';

const Community: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Mock data
    const posts: CommunityPost[] = [
        {
            id: '1',
            author: {
                name: 'CA Priya Sharma',
                title: 'Tax Expert',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            },
            content: 'Important update on the new GST amendment effective from next month. All businesses with turnover above ₹5 crore need to file additional returns. Here\'s what you need to know...',
            timestamp: '2 hours ago',
            tags: ['GST', 'Compliance', 'Tax'],
            trending: true,
            likes: 45,
            comments: 12,
        },
        {
            id: '2',
            author: {
                name: 'Rajesh Kumar',
                title: 'Business Owner',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
            },
            content: 'Just implemented a new expense tracking system for my team. Reduced processing time by 60%! Happy to share my experience and answer questions.',
            timestamp: '5 hours ago',
            tags: ['Expenses', 'Productivity', 'Tips'],
            trending: false,
            likes: 28,
            comments: 8,
        },
        {
            id: '3',
            author: {
                name: 'CA Anjali Mehta',
                title: 'Investment Advisor',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
            },
            content: 'TDS rate changes for FY 2024-25 announced. Here\'s a comprehensive breakdown of what changed and how it affects your business...',
            timestamp: '1 day ago',
            tags: ['TDS', 'Tax Planning', 'Updates'],
            trending: true,
            likes: 67,
            comments: 23,
        },
    ];

    const experts: Expert[] = [
        {
            id: '1',
            name: 'CA Priya Sharma',
            specialty: 'GST & Indirect Tax',
            rating: 4.9,
            consultations: 234,
            availability: 'available',
        },
        {
            id: '2',
            name: 'CA Rajesh Gupta',
            specialty: 'Income Tax & Planning',
            rating: 4.8,
            consultations: 189,
            availability: 'busy',
        },
        {
            id: '3',
            name: 'CA Anjali Mehta',
            specialty: 'Investment Advisory',
            rating: 4.9,
            consultations: 156,
            availability: 'available',
        },
    ];

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Community & Knowledge Hub</h1>
                    <p className="text-beige-600 text-lg">Connect with experts and share financial insights</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'add',
                            label: 'New Post',
                            onClick: () => console.log('New post'),
                        },
                        {
                            icon: 'question_answer',
                            label: 'Ask Question',
                            onClick: () => console.log('Ask question'),
                        },
                        {
                            icon: 'article',
                            label: 'Write Article',
                            onClick: () => console.log('Write article'),
                        },
                        {
                            icon: 'event',
                            label: 'Create Event',
                            onClick: () => console.log('Create event'),
                        },
                    ]}
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Active Members"
                    value="2,847"
                    change={12}
                    icon="people"
                    iconColor="text-primary"
                    iconBg="bg-primary/10"
                />
                <KPICard
                    title="Discussions"
                    value="1,234"
                    change={8}
                    icon="forum"
                    iconColor="text-blue-600"
                    iconBg="bg-blue-50"
                />
                <KPICard
                    title="Knowledge Articles"
                    value="456"
                    icon="library_books"
                    iconColor="text-amber-600"
                    iconBg="bg-amber-50"
                />
                <KPICard
                    title="Expert Contributors"
                    value="89"
                    icon="verified"
                    iconColor="text-emerald-600"
                    iconBg="bg-emerald-50"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Community Feed */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Filters */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {['all', 'trending', 'gst', 'tax', 'investment'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${activeFilter === filter
                                    ? 'bg-primary text-white'
                                    : 'bg-beige-100 text-beige-700 hover:bg-beige-200'
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Posts */}
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-card p-card shadow-card border border-beige-200 hover:shadow-card-hover transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-12 h-12 rounded-full border-2 border-beige-200"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-bold text-beige-900">{post.author.name}</p>
                                        {post.trending && (
                                            <StatusBadge status="danger" label="Trending" size="sm" />
                                        )}
                                    </div>
                                    <p className="text-sm text-beige-600">{post.author.title} • {post.timestamp}</p>
                                </div>
                            </div>

                            <p className="text-beige-800 mb-4 leading-relaxed">{post.content}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-beige-100 text-beige-700 rounded-full text-xs font-semibold"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-4 border-t border-beige-200">
                                <button className="flex items-center gap-2 text-beige-600 hover:text-primary transition-colors">
                                    <span className="material-icons-round text-lg">favorite_border</span>
                                    <span className="font-semibold">{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 text-beige-600 hover:text-primary transition-colors">
                                    <span className="material-icons-round text-lg">chat_bubble_outline</span>
                                    <span className="font-semibold">{post.comments}</span>
                                </button>
                                <button className="flex items-center gap-2 text-beige-600 hover:text-primary transition-colors">
                                    <span className="material-icons-round text-lg">share</span>
                                    <span className="font-semibold">Share</span>
                                </button>
                                <button className="flex items-center gap-2 text-beige-600 hover:text-primary transition-colors ml-auto">
                                    <span className="material-icons-round text-lg">bookmark_border</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Expert Network Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-card p-card shadow-card border border-beige-200 sticky top-8">
                        <h3 className="text-xl font-bold text-beige-900 mb-6">Expert Network</h3>

                        <div className="space-y-4">
                            {experts.map((expert) => (
                                <div
                                    key={expert.id}
                                    className="p-4 bg-beige-50 rounded-xl border border-beige-200 hover:border-primary transition-all"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-bold text-beige-900">{expert.name}</p>
                                            <p className="text-sm text-beige-600">{expert.specialty}</p>
                                        </div>
                                        <StatusBadge
                                            status={expert.availability === 'available' ? 'success' : 'warning'}
                                            label={expert.availability}
                                            size="sm"
                                        />
                                    </div>

                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex items-center gap-1">
                                            <span className="material-icons-round text-amber-500 text-sm">star</span>
                                            <span className="text-sm font-bold text-beige-900">{expert.rating}</span>
                                        </div>
                                        <span className="text-xs text-beige-500">
                                            {expert.consultations} consultations
                                        </span>
                                    </div>

                                    <Button variant="primary" size="sm" icon="chat" fullWidth>
                                        Chat
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
