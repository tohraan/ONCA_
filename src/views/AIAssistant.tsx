
import React, { useState } from 'react';
import Button from '../components/Button';
import QuickActions from '../components/QuickActions';

interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

const AIAssistant: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! I\'m your ONCA AI Assistant. I can help you analyze your finances, answer questions about your business, and provide insights. How can I assist you today?',
            timestamp: 'Just now',
        },
    ]);
    const [inputValue, setInputValue] = useState('');

    const suggestedPrompts = [
        'Analyze my revenue trends',
        'Show top 5 expenses this month',
        'Check compliance deadlines',
        'Forecast next quarter cash flow',
    ];

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
            timestamp: 'Just now',
        };

        setMessages([...messages, newMessage]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'I understand your question. Based on your financial data, here\'s what I found... (This is a demo response. In production, this would connect to the Gemini API for real AI-powered insights.)',
                timestamp: 'Just now',
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-beige-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">AI Assistant</h1>
                        <p className="text-beige-600 text-lg">Your intelligent companion for real-time financial insights</p>
                    </div>
                    <QuickActions
                        actions={[
                            {
                                icon: 'history',
                                label: 'View History',
                                onClick: () => console.log('History'),
                            },
                            {
                                icon: 'delete_sweep',
                                label: 'Clear Chat',
                                onClick: () => console.log('Clear'),
                            },
                            {
                                icon: 'download',
                                label: 'Export Conversation',
                                onClick: () => console.log('Export'),
                            },
                            {
                                icon: 'settings',
                                label: 'AI Settings',
                                onClick: () => console.log('Settings'),
                            },
                        ]}
                    />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
                <div className="max-w-4xl mx-auto space-y-6">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.role === 'assistant' && (
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round">smart_toy</span>
                                </div>
                            )}
                            <div
                                className={`max-w-2xl rounded-2xl p-6 ${message.role === 'user'
                                    ? 'bg-primary text-white'
                                    : 'bg-white border border-beige-200 shadow-card'
                                    }`}
                            >
                                <p className={message.role === 'user' ? 'text-white' : 'text-beige-900'}>
                                    {message.content}
                                </p>
                                <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-white/70' : 'text-beige-500'}`}>
                                    {message.timestamp}
                                </p>
                            </div>
                            {message.role === 'user' && (
                                <div className="w-10 h-10 bg-beige-200 text-beige-700 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round">person</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && (
                <div className="px-8 py-4 border-t border-beige-200">
                    <p className="text-sm font-bold text-beige-700 mb-3">Try asking:</p>
                    <div className="flex flex-wrap gap-2">
                        {suggestedPrompts.map((prompt) => (
                            <button
                                key={prompt}
                                onClick={() => setInputValue(prompt)}
                                className="px-4 py-2 bg-beige-100 hover:bg-beige-200 text-beige-800 rounded-full text-sm font-medium transition-colors"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="px-8 py-6 border-t border-beige-200 bg-white">
                <div className="max-w-4xl mx-auto flex gap-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask anything about your finances..."
                            className="w-full px-6 py-4 bg-beige-50 border border-beige-200 rounded-full text-beige-900 placeholder-beige-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <Button
                        variant="primary"
                        icon="send"
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="rounded-full px-8"
                    >
                        Send
                    </Button>
                </div>
                <p className="text-xs text-beige-500 text-center mt-3">
                    AI Assistant is powered by advanced language models. Responses are generated based on your financial data.
                </p>
            </div>
        </div>
    );
};

export default AIAssistant;
