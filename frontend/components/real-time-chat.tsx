"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, X, MessageCircle, Phone, Mail, Paperclip, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: "user" | "agent"
  content: string
  timestamp: Date
  type: "text" | "image" | "file"
}

interface ChatProps {
  isOpen: boolean
  onClose: () => void
}

export function RealTimeChat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "agent",
      content: "Hello! I'm Sarah from KoreaTravelHub support. How can I help you today?",
      timestamp: new Date(Date.now() - 60000),
      type: "text",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [agentInfo] = useState({
    name: "Sarah Kim",
    role: "Travel Expert",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: newMessage,
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! Let me check our available options for you.",
        "That's a great question! Based on your travel dates, I can recommend several options.",
        "I understand your concern. Let me provide you with the most up-to-date information.",
        "Perfect! I can definitely assist you with booking that experience. Let me walk you through the process.",
        "Thank you for choosing KoreaTravelHub! I'll make sure you have an amazing trip to Korea.",
      ]

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "agent",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: "text",
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, agentMessage])
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
      {/* Header */}
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={agentInfo.avatar || "/placeholder.svg"} />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{agentInfo.name}</CardTitle>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-red-100">{agentInfo.role} • Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.sender === "user" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.content}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
            {message.sender === "agent" && (
              <Avatar className="h-8 w-8 order-1 mr-2">
                <AvatarImage src={agentInfo.avatar || "/placeholder.svg"} />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={agentInfo.avatar || "/placeholder.svg"} />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Smile className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={sendMessage} size="sm" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">Typically replies in a few minutes</div>
      </div>
    </div>
  )
}

export function ChatButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg z-40"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
